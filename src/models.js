(function (app) {
    class Post {
        constructor(post) {
            this.id = Math.random();
            this.title = post.title;
            this.description = post.description;
        }
    }
    app.Post = Post;
})(App);