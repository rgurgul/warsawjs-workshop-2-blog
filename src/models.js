(function (app) {
    class Post {
        constructor(post) {
            this.id = undefined;
            this.title = post.title;
            this.description = post.description;
            this.comments = [];
        }
    }
    app.Post = Post;
})(App);