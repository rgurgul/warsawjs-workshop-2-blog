(function (app) {
    class PostService {

        constructor() {
            this.posts = [];
        }

        fetch() {
            this.posts = JSON.parse(localStorage.getItem('posts')) || [];
            return {posts: this.posts};
        }

        add(data) {
            let post = new app.Post(data);
            post.id = parseInt(Math.random() * 10000);
            this.posts.push(post);
            this.save(app.viewList.refresh);
        }

        remove(id) {
            this.posts.splice(this.findById(id), 1);
            this.save(app.viewList.refresh);
        }

        save(callback) {
            localStorage.setItem('posts', JSON.stringify(this.posts));
            callback && callback.call(app.viewList);
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
            app.viewPost.show(post);
            this.save();
        }
    }
    app.postService = new PostService();
})(App);