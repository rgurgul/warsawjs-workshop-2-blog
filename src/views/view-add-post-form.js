(function (app) {

    const {Validate} = app.utils;
    const {Post, EventModel} = app.models;

    class ViewAddPostForm {
        constructor() {
            const addPostForm = document.forms['add-post-form'];
            const validator = new Validate(addPostForm, new Post());

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