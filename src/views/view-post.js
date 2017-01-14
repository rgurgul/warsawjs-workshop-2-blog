(function (app) {

    class ViewPost extends app.views.ViewBase {
        constructor() {
            super();
            this.tpl = document.querySelector("#view-post-tpl");
            this.container = document.querySelector('.main-container');
        }

        show(post) {
            this.render(post, this.tpl.innerHTML, this.container);
            this.newComment = this.container.querySelector('.new-comment');
            this.btnAddComment = this.container.querySelector('.btn-add-comment');
            this.btnAddComment.addEventListener('click', () => {
                this.addComment(post, this.newComment.value);
            });
        }

        addComment(post, comment) {
            document.dispatchEvent(new CustomEvent(
                'add-comment',
                {detail: {post, comment}}
            ))
        }
    }

    app.views.ViewPost = ViewPost;

})(App);