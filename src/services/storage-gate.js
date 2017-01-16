(function (app) {

    let LocalStrategy = app.services.LocalStrategy;
    let ServerStrategy = app.services.ServerStrategy;

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