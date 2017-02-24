(function (app) {

    const {SHOULD_IMPLEMENT} = app.settings.MSG;

    class ViewAbstract {

        afterRender() {
            throw SHOULD_IMPLEMENT + 'afterRender';
        }

        render() {
            throw SHOULD_IMPLEMENT + 'render';
        }
    }

    app.views.ViewAbstract = ViewAbstract;

})(App);