(function (app) {
    class PostService {

        constructor(){
            this.posts = [];
        }

        fetch(){
            this.posts = JSON.parse(localStorage.getItem('posts')) || [];
            return {posts:this.posts};
        }

        add(data){
            let post = new app.Post(data);
            this.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(this.posts));
        }

        remove(){

        }
    }
    app.PostService = new PostService();
})(App);