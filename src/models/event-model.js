(function (app = {}) {

    class EventModel {
        static create(name, data) {
            return new CustomEvent(name, {detail: data});
        }
    }

    app.models.EventModel = EventModel;

})(App);