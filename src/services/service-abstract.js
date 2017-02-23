(function (app = {}) {

    const {SHOULD_IMPLEMENT_MSG} = app.settings;

    class ItemsServiceAbstract {
        fetch() {
            throw SHOULD_IMPLEMENT_MSG + 'fetch';
        }

        save() {
            throw SHOULD_IMPLEMENT_MSG + 'save';
        }

        update() {
            throw SHOULD_IMPLEMENT_MSG + 'update';
        }

        remove() {
            throw SHOULD_IMPLEMENT_MSG + 'remove';
        }

        get() {
            throw SHOULD_IMPLEMENT_MSG + 'get';
        }
    }
    app.services.ItemsServiceAbstract = ItemsServiceAbstract;

})(App);