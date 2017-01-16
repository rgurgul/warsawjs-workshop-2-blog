(function (app) {

    class ViewBase {

        renderTemplate(data, tpl, container) {
            let result = Handlebars.compile(tpl)(data);
            container.innerHTML = result;
        }

    }

    app.views.ViewBase = ViewBase;

})(App);