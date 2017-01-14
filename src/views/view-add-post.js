(function (app) {

    let postsService = app.services.postsService;
    let Validate = app.Validate;

    class AddNewPost {
        constructor() {
            let addPostForm = document.forms['add-post-form'];
            let btnAdd = addPostForm.querySelector('button');
            let validator = new Validate(addPostForm);

            btnAdd.addEventListener('click', () => {
                validator.checkForm((data) => {
                    postsService.add(data);
                });
            });
        }
    }

    app.views.AddNewPost = new AddNewPost();

})(App);