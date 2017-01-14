(function (app) {
    class PostsService {

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
            this.save(app.views.viewList.refresh);
        }

        remove(id) {
            this.posts.splice(this.findById(id), 1);
            this.save(app.views.viewList.refresh);
        }

        save(callback) {
            localStorage.setItem('posts', JSON.stringify(this.posts));
            callback && callback.call(app.views.viewList);
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
            app.views.viewPost.show(post);
            this.save();
        }
    }
    app.services.postsService = new PostsService();
})(App);