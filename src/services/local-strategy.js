(function (app) {

    const {ItemsServiceAbstract} = app.services;
    const Helpers = app.Helpers;

    class LocalStrategy extends ItemsServiceAbstract {

        constructor() {
            super();
            this.data = {
                posts: []
            };
        }

        fetch(callback) {
            this.data.posts = JSON.parse(localStorage.getItem('posts')) || [];
            callback(this.data);
        }

        save(data, callback) {
            let _id = Helpers.getRandomId();
            let post = Object.assign(data, {_id});
            this.data.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(this.data.posts));
            callback && callback();
        }

        update(post, callback) {
            localStorage.setItem('posts', JSON.stringify(this.data.posts));
            callback();
        }

        remove(id, callback) {
            let index = this.findIndex(id);
            this.data.posts.splice(index, 1);
            localStorage.setItem('posts', JSON.stringify(this.data.posts));
            callback();
        }

        get(id, callback) {
            let post = this.data.posts.find((post) => post._id == id);
            callback(post);
        }

        findIndex(id) {
            return this.data.posts.findIndex((post) => {
                return post._id === parseInt(id);
            });
        }
    }

    app.services.LocalStrategy = LocalStrategy;

})(App);