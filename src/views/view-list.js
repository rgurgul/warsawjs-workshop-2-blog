(function (app) {

    let ViewBase = app.views.ViewBase;

    class ViewList extends ViewBase {
        constructor() {
            super();

            this.tpl = document.querySelector("#post-list-tpl");
            this.container = document.querySelector('.post-container');

            this.container.addEventListener('click', (evt) => {
                let el = evt.target;
                if (el.className.includes('btn-remove')) {
                    document.dispatchEvent(new CustomEvent("remove-post", {
                        detail: el.getAttribute('data-id')
                    }));
                }
            });
        }

        refresh(data) {
            this.render(data, this.tpl.innerHTML, this.container);
        }

        clearContainer() {
            this.container.innerHTML = '';
        }
    }

    app.views.ViewList = ViewList;

})(App);