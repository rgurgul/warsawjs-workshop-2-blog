(function (app) {

    class Helpers {
        static getHash(str) {
            if(!str.includes('#')) return;
            let divided = str.split('#');
            return divided.pop();
        }
        static getRandomId(){
            return parseInt(Math.random() * 10000);
        }
    }

    app.Helpers = Helpers;

})(App);