(function (app) {

    let ViewBase = app.views.ViewBase;

    class ViewPostList extends ViewBase {
        constructor() {
            super();

            this.tpl = document.querySelector("#view-post-list-tpl");
            this.container = document.querySelector('.main-container');

            this.container.addEventListener('click', (evt) => {
                let el = evt.target;
                if (el.className.includes('btn-remove')) {
                    if(!confirm('are you sure?')) return;
                    document.dispatchEvent(new CustomEvent("remove-post", {
                        detail: el.getAttribute('data-id')
                    }));
                }
            });
        }

        preRender(data) {
            this.render(data, this.tpl.innerHTML, this.container);
        }
    }

    app.views.ViewPostList = ViewPostList;

})(App);