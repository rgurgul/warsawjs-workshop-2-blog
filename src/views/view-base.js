(function (app) {

    class ViewBase {

        render(data, tpl, container) {
            let result = Handlebars.compile(tpl)(data);
            container.innerHTML = result;
        }

    }

    app.views.ViewBase = ViewBase;

})(App);