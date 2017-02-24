(function (app) {

    const {AjaxService} = app.services;
    const {ItemsServiceAbstract} = app.services;

    class ServerStrategy extends ItemsServiceAbstract {

        constructor() {
            super();
            this.data = {
                posts: []
            };
            this.ajaxService = new AjaxService(app.settings.SERVER_END_POINT);
        }

        fetch(callback) {
            this.ajaxService.do('get', (response) => {
                this.data = response || [];
                callback(this.data);
            });
        }

        save(post, callback) {
            this.ajaxService.do('post', () => {
                callback && callback();
            }, post);
        }

        update(post, callback) {
            this.ajaxService.do('put', (post) => {
                callback && callback(post);
            }, post);
        }

        remove(id, callback) {
            this.ajaxService.do('delete', () => {
                callback && callback();
            }, {_id: id});
        }

        get(id, callback) {
            let post = this.data.posts.find((post) => post._id == id);
            callback(post);
        }
    }

    app.services.ServerStrategy = ServerStrategy;

})(App);