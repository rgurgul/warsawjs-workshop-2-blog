(function (app) {

    class ViewPost extends app.ViewBase {
        constructor() {
            super();
            this.tpl = document.querySelector("#post-tpl");
            this.container = document.querySelector('.post-container');
        }

        show(post) {

            this.render(post, this.tpl.innerHTML, this.container);
            this.btnAddComment = this.container.querySelector('.btn-add-comment');
            //this.addCommentForm = this.container.querySelector('.add-comment-form');
            this.newComment = this.container.querySelector('.new-comment');

            this.btnAddComment.addEventListener('click', () => {
                post.comments.push({msg: this.newComment.value});
                app.postsService.addComment(post);
            });
        }
    }

    app.viewPost = new ViewPost();

})(App);