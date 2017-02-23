(function (app) {

    let ajaxService = new app.services.AjaxService(app.settings.SERVER_END_POINT);

    class ServerStrategy extends ItemsServiceAbstract {

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
            ajaxService.do('put', (post) => {
                callback && callback(post);
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