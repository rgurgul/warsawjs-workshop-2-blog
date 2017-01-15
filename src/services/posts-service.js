(function (app) {

    //let ajaxService = new app.services.AjaxService('http://localhost:3333');

    class PostsService {

        constructor() {
            this.posts = [];
        }

        fetch(callback) {
            this.posts = JSON.parse(localStorage.getItem('posts')) || [];
            callback({posts: this.posts});

            /*ajaxService.do('get', (response) => {
             this.posts = response || [];
             callback({posts: this.posts});
             });*/
        }

        add(post, callback) {
            this.posts.push(post);
            this.save(callback);
        }

        remove(id, callback) {
            let post = this.findById(id);
            this.posts.splice(post, 1);
            this.save(callback);
        }

        save(callback) {
            localStorage.setItem('posts', JSON.stringify(this.posts));
            callback && callback();

            /*ajaxService.do('post', () => {
             callback && callback();
             }, this.posts);*/
        }

        findById(id) {
            return this.posts.findIndex((post) => {
                return post.id === parseInt(id);
            });
        }

        getPostById(id) {
            return this.posts[this.findById(id)];
        }
    }

    app.services.PostsService = PostsService;

})(App);