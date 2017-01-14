(function (app) {

    let Post = app.models.Post;
    let postsService = app.services.postsService;
    let viewList = new app.views.ViewList();

    class PostsController {
        constructor() {

            postsService.fetch(viewList.refresh.bind(viewList));

            document.addEventListener('add-post', (evt) => {
                let data = evt.detail;
                this.add(data);
            });

            document.addEventListener('remove-post', (evt) => {
                let id = evt.detail;
                this.remove(id);
            });
        }

        remove(id) {
            postsService.remove(id, () => {
                postsService.fetch(viewList.refresh.bind(viewList));
            });
        }

        add(data) {
            let id = parseInt(Math.random() * 10000);
            let post = new Post(Object.assign(data, {id}));
            postsService.add(post, () => {
                postsService.fetch(viewList.refresh.bind(viewList));
            });
        }
    }

    app.controllers.PostsController = PostsController;

})(App);