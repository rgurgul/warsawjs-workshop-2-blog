(function (app) {

    class Helpers {
        static getHash(str) {
            if(!str.includes('#')) return;
            let divided = str.split('#');
            return divided.pop();
        }
    }

    app.Helpers = Helpers;

})(App);