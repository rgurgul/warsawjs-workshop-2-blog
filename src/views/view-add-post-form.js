(function (app) {

    let Validate = app.Validate;

    class ViewAddPostForm {
        constructor() {
            let addPostForm = document.forms['add-post-form'];
            let btnAdd = addPostForm.querySelector('button');
            let validator = new Validate(addPostForm);

            btnAdd.addEventListener('click', () => {
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