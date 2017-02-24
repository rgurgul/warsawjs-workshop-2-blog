(function (app) {

    const {Validate} = app.utils;
    const {Post, EventModel} = app.models;

    class ViewAddPostForm {
        constructor() {
            let addPostForm = document.forms['add-post-form'];
            let validator = new Validate(addPostForm, new Post());

            addPostForm
                .querySelector('button')
                .addEventListener('click', () => {
                    validator.checkForm((data) => {
                        document.dispatchEvent(EventModel.create(app.settings.EVENTS.ADD_POST, data));
                    });
                });
        }
    }

    app.views.ViewAddPostForm = ViewAddPostForm;

})(App);