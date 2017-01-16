(function (app) {

    let StorageStrategy = app.services.StorageStrategy;

    class PostsService {

        constructor(type) {
            this.storage = new StorageStrategy(type);
        }

        fetch(callback) {
            this.storage.fetch(callback);
        }

        remove(id, callback) {
            this.storage.remove(id, callback);
        }

        save(post, callback) {
            this.storage.save(post, callback);
        }

        update(post, callback) {
            this.storage.update(post, callback);
        }

        getPostById(id, callback) {
            this.storage.get(id, callback);
        }
    }

    app.services.PostsService = PostsService;

})(App);