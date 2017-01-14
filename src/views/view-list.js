(function (app) {

    class ViewList extends app.ViewBase {
        constructor() {
            super();

            this.posts = app.postsService.fetch();
            this.tpl = document.querySelector("#post-list-tpl");
            this.container = document.querySelector('.post-container');

            this.container.addEventListener('click', (evt) => {
                let el = evt.target;
                if (/BUTTON/.test(el.tagName) && el.className.includes('btn-remove')) {
                    app.postsService.remove(el.getAttribute('data-id'));
                }
            });

            this.refresh();
        }

        refresh() {
            this.render(this.posts, this.tpl.innerHTML, this.container);
        }

        clearContainer(){
            //this.container.classList.add('hidden-xs-up');
            this.container.innerHTML = '';
        }
    }

    app.viewList = new ViewList();

})(App);