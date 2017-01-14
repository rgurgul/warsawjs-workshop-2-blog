(function (app) {

    class PostsService {

        constructor() {
            this.posts = [];
        }

        fetch(callback) {
            this.posts = JSON.parse(localStorage.getItem('posts')) || [];
            callback({posts: this.posts});
        }

        add(post, callback) {
            this.posts.push(post);
            this.save(callback);
        }

        remove(id, callback) {
            this.posts.splice(this.findById(id), 1);
            this.save(callback);
        }

        save(callback) {
            localStorage.setItem('posts', JSON.stringify(this.posts));
            callback && callback();
        }

        findById(id) {
            let item = this.posts.find(function (obj) {
                return obj.id == id;
            });
            return this.posts.indexOf(item);
        }

        getPost(id) {
            return this.posts[this.findById(id)];
        }

        addComment(post) {
            viewPost.show(post);
            this.save();
        }
    }
    app.services.postsService = new PostsService();
})(App);