(function (app) {
    class Post {
        constructor(post) {
            this.id = post.id;
            this.title = post.title;
            this.description = post.description;
            this.comments = [];
        }
    }
    app.models.Post = Post;
})(App);