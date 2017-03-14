(function (app) {

    const {LocalStrategy, ServerStrategy} = app.services;

    class StorageGate {

        constructor(type) {
            switch (type) {
                case 'local':
                    return new LocalStrategy();
                    break;
                case 'server':
                    return new ServerStrategy();
                    break;
                default:
                    return new LocalStrategy();
                    break;
            }
        }

    }

    app.services.StorageGate = StorageGate;

})(App);