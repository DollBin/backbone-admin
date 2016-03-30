
import Todos from "./todo-list";

export default  Backbone.Model.extend({
    defaults: function () {
        return {
            title: "empty todo...",
            order: Todos.nextOrder(),
            done: false
        }
    },
    toggle: function () {
        this.save({done: !this.get("done")});
    }
});