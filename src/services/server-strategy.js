(function (app) {

    let ajaxService = new app.services.AjaxService(app.settings.SERVER_END_POINT);

    class ServerStrategy {

        constructor() {
            this.data = {
                posts: []
            };
        }

        fetch(callback) {
            ajaxService.do('get', (response) => {
                this.data = response || [];
                callback(this.data);
            });
        }

        save(post, callback) {
            ajaxService.do('post', () => {
                callback && callback();
            }, post);
        }

        update(post, callback) {
            ajaxService.do('put', (ddd) => {
                callback && callback(ddd);
            }, post);
        }

        remove(id, callback) {
            ajaxService.do('delete', () => {
                callback && callback();
            }, {id});
        }

        get(id, callback) {
            let post = this.data.posts.find((post) => post._id == id);
            callback(post);
        }
    }

    app.services.ServerStrategy = ServerStrategy;

})(App);