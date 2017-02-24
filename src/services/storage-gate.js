(function (app) {

    const {LocalStrategy, ServerStrategy} = app.services;

    class StorageGate {

        constructor(type) {
            if (type === 'local') {
                return new LocalStrategy();
            } else if (type === 'server') {
                return new ServerStrategy();
            }
        }

    }

    app.services.StorageGate = StorageGate;

})(App);