
import Todo from "./todo";

const TotoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new BackboneLocalstorge("todos-backbone"),
    done: function () {
        return this.where({done: true});
    },
    remaining: function () {
        return this.where({done: false});
    },
    nextOrder: function () {
        if (!this.length)return 1;
        return this.last().get("order") + 1;
    },
    comparator: "order"
});

const todos = new TotoList();

export default todos;