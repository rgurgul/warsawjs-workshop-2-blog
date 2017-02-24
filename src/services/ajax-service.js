(function (app) {

    class AjaxService {

        constructor(url) {
            this.url = url;
        }

        do(action, callback, data) {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.addEventListener('load', function ({target:{response}}) {
                callback(response);
            });
            xhr.open(action, this.url);
            xhr.setRequestHeader("content-type", "application/json");
            xhr.send(JSON.stringify(data));
        }
    }

    app.services.AjaxService = AjaxService;

})(App);