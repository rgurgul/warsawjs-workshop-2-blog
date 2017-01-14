(function (app) {

    class Helpers {
        static getHash(str) {
            let divided = str.split('#');
            return divided.pop();
        }
    }

    app.Helpers = Helpers;

})(App);