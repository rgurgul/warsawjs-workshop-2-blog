(function (app) {

    let Validate = app.Validate;

    class ViewAddPostForm {
        constructor() {
            let addPostForm = document.forms['add-post-form'];
            let validator = new Validate(addPostForm);

            addPostForm
                .querySelector('button')
                .addEventListener('click', () => {
                    validator.checkForm((data) => {
                        document.dispatchEvent(
                            new CustomEvent('add-post', {
                                detail: data
                            })
                        );
                    });
                });
        }
    }

    app.views.ViewAddPostForm = ViewAddPostForm;

})(App);