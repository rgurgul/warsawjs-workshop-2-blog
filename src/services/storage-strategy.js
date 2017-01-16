(function (app) {

    let ajaxService = new app.services.AjaxService('http://localhost:4444/posts');

    class StorageStrategy {

        constructor(type) {
            this.type = type;
            this.data = {
                posts: []
            };
            return this[type](this.data);
        }

        local(data) {

            function findIndex(id) {
                return data.posts.findIndex((post) => {
                    return post._id === parseInt(id);
                });
            }

            return {
                fetch: function (callback) {
                    data.posts = JSON.parse(localStorage.getItem('posts')) || [];
                    callback(data);
                },
                save: function (post, callback) {
                    data.posts.push(post);
                    localStorage.setItem('posts', JSON.stringify(data.posts));
                    callback && callback();
                },
                update: function (post, callback) {
                    let exist = findIndex(post.id);
                    if (exist > -1) {
                        data.posts[exist] = post;
                    }
                    localStorage.setItem('posts', JSON.stringify(data.posts));
                    callback();
                },
                remove: function (id, callback) {
                    let index = findIndex(id);
                    data.posts.splice(index, 1);
                    localStorage.setItem('posts', JSON.stringify(data.posts));
                    callback();
                },
                get: function (id, callback) {
                    let post = data.posts.find((post) => post._id == id);
                    callback(post);
                }
            }
        }

        ajax(data) {
            return {
                fetch: function (callback) {
                    ajaxService.do('get', (response) => {
                        data = response || [];
                        callback(data);
                    });
                },
                save: function (post, callback) {
                    ajaxService.do('post', () => {
                        callback && callback();
                    }, post);
                },
                update: function (post, callback) {
                    ajaxService.do('put', (ddd) => {
                        callback && callback(ddd);
                    }, post);
                },
                remove: function (id, callback) {
                    ajaxService.do('delete', () => {
                        callback && callback();
                    }, {id});
                },
                get: function (id, callback) {
                    let post = data.posts.find((post) => post._id == id);
                    callback(post);
                }
            }
        }
    }

    app.services.StorageStrategy = StorageStrategy;

})(App);