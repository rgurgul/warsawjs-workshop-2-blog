(function (app) {

    let Post = app.models.Post;
    let Comment = app.models.Comment;
    let storage = new app.services.StorageGate(app.settings.API_STRATEGY.LOCAL);
    let viewList = new app.views.ViewPostsList();
    let viewPost = new app.views.ViewPostDetails();
    let ViewAddPostForm = app.views.ViewAddPostForm;
    let Helpers = app.Helpers;

    class PostsController {
        constructor() {

            this.fetchPosts();

            new ViewAddPostForm();

            document.addEventListener(app.settings.EVENTS.ADD_POST, (evt) => {
                this.addPost(evt.detail);
            });

            document.addEventListener(app.settings.EVENTS.REMOVE_POST, (evt) => {
                let id = evt.detail;
                this.removePost(id);
            });

            document.addEventListener(app.settings.EVENTS.ADD_COMMENT, (evt) => {
                let post = evt.detail.post;
                let comment = new Comment(evt.detail.comment);
                post.addComment(comment);
                storage.update(post, function () {
                    viewPost.render(post);
                });
            });

            window.addEventListener(app.settings.EVENTS.HASH_CHANGE, (evt) => {
                this.navigateTo(evt.newURL);
            });

            window.history.pushState('', '/', window.location.pathname);
        }

        navigateTo(url){
            let id = Helpers.getHash(url);
            id
                ? this.getPostById(id)
                : location.replace(location.href);
        }

        fetchPosts() {
            storage.fetch(viewList.render.bind(viewList));
        }

        getPostById(id) {
            storage.get(id, function (post) {
                viewPost.render(new Post(post));
            });
        }

        removePost(id) {
            storage.remove(id, this.fetchPosts);
        }

        addPost(data) {
            storage.save(data, () => {
                this.fetchPosts();
            });
        }
    }

    app.controllers.PostsController = PostsController;

})(App);