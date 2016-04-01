define(["jquery",
    "backbone",
    "underscore",
    "text!template/admin.html"], function ($, Backbone, _, Html) {

    var AdminListView = Backbone.View.extend({
        el: $("#app"),
        template: _.template(Html),
        events: {
            "click .edit": "edit",
            "click .delete": "delete"
        },
        render: function () {
            console.log(Date.now());
            this.$el.html(this.template());
            return this;
        },
        edit: function () {
            console.log("edit");
        },
        delete:function(){
            console.log("delete");
        }
    });

    return {
        init: function () {
            var app = new AdminListView();
            app.render();
        }
    }

});