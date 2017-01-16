(function (app) {

    let Validate = app.Validate;

    class ViewPostDetails extends app.views.ViewBase {

        constructor() {
            super();
            this.tpl = document.querySelector("#view-post-tpl");
            this.container = document.querySelector('.main-container');
        }

        render(post) {
            this.renderTemplate(post, this.tpl.innerHTML, this.container);

            let btnBack = this.container.querySelector('.btn-back');
            let form = document.forms['add-comment-form'];

            let validator = new Validate(form);

            this.container
                .querySelector('.btn-add-comment')
                .addEventListener('click', () => {
                    validator.checkForm((data) => {
                        this.addComment(post, data);
                    });
                });

            btnBack.addEventListener('click', () => {
                window.history.back();
            });
        }

        addComment(post, comment) {
            document.dispatchEvent(new CustomEvent(
                app.settings.EVENTS.ADD_COMMENT,
                {detail: {post, comment}}
            ))
        }
    }

    app.views.ViewPostDetails = ViewPostDetails;

})(App);