(function (app) {

    const {Post, Comment} = app.models;
    const {Helpers} = app.utils;
    const {StorageGate} = app.services;
    const {ViewAddPostForm, ViewPostsList, ViewPostDetails} = app.views;

    class PostsController {
        constructor() {

            this.storage = new StorageGate(app.settings.API_STRATEGY.LOCAL);
            this.viewList = new ViewPostsList();
            this.viewPost = new ViewPostDetails();
            new ViewAddPostForm();
            this.fetchPosts();

            document.addEventListener(app.settings.EVENTS.ADD_POST, ({detail}) => {
                this.addPost(detail);
            });

            document.addEventListener(app.settings.EVENTS.REMOVE_POST, ({detail:id}) => {
                this.removePost(id);
            });

            document.addEventListener(app.settings.EVENTS.ADD_COMMENT, ({detail: {post, comment}}) => {
                post.addComment(new Comment(comment));
                this.storage.update(post, () => {
                    this.viewPost.render(post);
                });
            });

            window.addEventListener(app.settings.EVENTS.HASH_CHANGE, ({newURL}) => {
                this.navigateTo(newURL);
            });

            window.history.pushState('', '/', window.location.pathname);
        }

        navigateTo(url) {
            const id = Helpers.getHash(url);
            id
                ? this.getPostById(id)
                : location.replace(location.href);
        }

        fetchPosts() {
            this.storage.fetch(this.viewList.render.bind(this.viewList));
        }

        getPostById(id) {
            this.storage.get(id, (post) => {
                this.viewPost.render(new Post(post));
            });
        }

        removePost(id) {
            this.storage.remove(id, this.fetchPosts.bind(this));
        }

        addPost(data) {
            this.storage.save(data, this.fetchPosts.bind(this));
        }
    }

    app.controllers.PostsController = PostsController;

})(App);