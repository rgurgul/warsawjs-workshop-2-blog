(function (app) {

    let Post = app.models.Post;
    let viewList = app.views.viewList;
    let postsService = app.services.postsService;

    class PostsController {
        constructor(){
            document.addEventListener('add-post', (evt) => {
                let data = evt.detail;
                this.save(data);
            });
        }

        save(data){
            let post = new Post(data);
            post.id = parseInt(Math.random() * 10000);
            postsService.add(data, viewList.refresh.bind(viewList));
        }
    }

    app.controllers.PostsController = PostsController;

})(App);