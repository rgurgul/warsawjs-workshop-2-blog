(function (app) {

    class AddNewPost {
        constructor() {
            let addPostForm = document.forms['add-post-form'];
            let btnAdd = addPostForm.querySelector('button');
            let validator = new app.Validate(addPostForm);

            btnAdd.addEventListener('click', () => {
                validator.checkForm((data) => {
                    app.postsService.add(data);
                });
            });
        }
    }

    app.AddNewPost = new AddNewPost();

})(App);