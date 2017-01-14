(function (app) {

    let Post = app.models.Post;
    let postsService = new app.services.PostsService();
    let viewList = new app.views.ViewList();
    let viewPost = new app.views.ViewPost();
    let ViewAddPostForm = app.views.ViewAddPostForm;
    let Helpers = app.Helpers;

    class PostsController {
        constructor() {

            this.fetch();

            new ViewAddPostForm();

            document.addEventListener('add-post', (evt) => {
                let data = evt.detail;
                this.add(data);
            });

            document.addEventListener('remove-post', (evt) => {
                let id = evt.detail;
                this.remove(id);
            });

            window.addEventListener('hashchange', (evt) => {
                this.getPostById(evt.newURL);
            });
        }

        fetch() {
            postsService.fetch(viewList.refresh.bind(viewList));
        }

        getPostById(url) {
            let id = Helpers.getHash(url);
            if (id) {
                let post = postsService.getPostById(id);
                viewPost.show(post);
            }
        }

        remove(id) {
            postsService.remove(id, () => {
                this.fetch();
            });
        }

        add(data) {
            let id = parseInt(Math.random() * 10000);
            let post = new Post(Object.assign(data, {id}));
            postsService.add(post, () => {
                this.fetch();
            });
        }
    }

    app.controllers.PostsController = PostsController;

})(App);