(function (app = {}) {

    const {SHOULD_IMPLEMENT} = app.settings.MSG;

    class ItemsServiceAbstract {
        fetch(){
            throw SHOULD_IMPLEMENT + 'fetch';
        }
        save(){
            throw SHOULD_IMPLEMENT + 'save';
        }
        update(){
            throw SHOULD_IMPLEMENT + 'update';
        }
        remove(){
            throw SHOULD_IMPLEMENT + 'remove';
        }
        get(){
            throw SHOULD_IMPLEMENT + 'get';
        }
    }
    app.services.ItemsServiceAbstract = ItemsServiceAbstract;
})(App);