(function (app) {

    class Comment {
        constructor(comment) {
            this.msg = comment.msg;
        }
    }

    class Post {
        constructor(post) {
            this._id = post._id;
            this.title = post.title;
            this.description = post.description;
            this.comments = post.comments || [];
        }

        addComment(comment) {
            this.comments.push(new Comment(comment));
        }
    }

    app.models.Post = Post;
    app.models.Comment = Comment;

})(App);