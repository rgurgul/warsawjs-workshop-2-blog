(function (app) {

    let Post = app.models.Post;
    let Comment = app.models.Comment;
    let postsService = new app.services.PostsService(app.settings.API_STRATEGY.SERVER);
    let viewList = new app.views.ViewPostsList();
    let viewPost = new app.views.ViewPostDetails();
    let ViewAddPostForm = app.views.ViewAddPostForm;
    let Helpers = app.Helpers;

    class PostsController {
        constructor() {

            this.fetchPosts();

            new ViewAddPostForm();

            document.addEventListener(app.settings.EVENTS.ADD_POST, (evt) => {
                let data = new Post(evt.detail);
                this.addPost(data);
            });

            document.addEventListener(app.settings.EVENTS.REMOVE_POST, (evt) => {
                let id = evt.detail;
                this.removePost(id);
            });

            document.addEventListener(app.settings.EVENTS.ADD_COMMENT, (evt) => {
                let post = evt.detail.post;
                let comment = new Comment(evt.detail.comment);
                post.addComment(comment);
                postsService.update(post, function () {
                    viewPost.render(post);
                });
            });

            window.addEventListener(app.settings.EVENTS.HASH_CHANGE, (evt) => {
                let id = Helpers.getHash(evt.newURL);
                if (id) {
                    this.getPostById(id);
                } else {
                    location.replace(location.href);
                }
            });
        }

        fetchPosts() {
            postsService.fetch(viewList.render.bind(viewList));
        }

        getPostById(id) {
            postsService.getPostById(id, function (post) {
                viewPost.render(new Post(post));
            });
        }

        removePost(id) {
            postsService.remove(id, this.fetchPosts);
        }

        addPost(data) {
            let _id = Helpers.getRandomId();
            let post = new Post(Object.assign(data, {_id}));
            postsService.save(post, () => {
                this.fetchPosts();
            });
        }
    }

    app.controllers.PostsController = PostsController;

})(App);