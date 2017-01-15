(function (app) {

    let Post = app.models.Post;
    let Comment = app.models.Comment;
    let postsService = new app.services.PostsService();
    let viewList = new app.views.ViewPostsList();
    let viewPost = new app.views.ViewPostDetails();
    let ViewAddPostForm = app.views.ViewAddPostForm;
    let Helpers = app.Helpers;

    class PostsController {
        constructor() {

            this.fetchPosts();

            new ViewAddPostForm();

            document.addEventListener('add-post', (evt) => {
                let data = evt.detail;
                this.addPost(data);
            });

            document.addEventListener('remove-post', (evt) => {
                let id = evt.detail;
                this.removePost(id);
            });

            document.addEventListener('add-comment', (evt) => {
                let post = evt.detail.post;
                let comment = new Comment(evt.detail.comment);
                post.addComment(comment);
                postsService.save(viewPost.preRender(post));
            });

            window.addEventListener('hashchange', (evt) => {
                let id = Helpers.getHash(evt.newURL);
                if(id) {
                    this.getPostById(id);
                } else {
                    location.replace(location.href);
                }
            });
        }

        fetchPosts() {
            postsService.fetch(viewList.preRender.bind(viewList));
        }

        getPostById(id) {
            let post = new Post(postsService.getPostById(id));
            viewPost.preRender(post);
        }

        removePost(id) {
            postsService.remove(id, () => {
                this.fetchPosts();
            });
        }

        addPost(data) {
            let id = parseInt(Math.random() * 10000);
            let post = new Post(Object.assign(data, {id}));
            postsService.add(post, () => {
                this.fetchPosts();
            });
        }
    }

    app.controllers.PostsController = PostsController;

})(App);