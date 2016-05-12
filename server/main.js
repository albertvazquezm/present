"use strict";
var meteor_1 = require('meteor/meteor');
var presents_ts_1 = require('../collections/presents.ts');
meteor_1.Meteor.startup(function () {
    presents_ts_1.Presents.insert({ title: "PS4 Edición PRO FIFA", description: "Con dos mandos" });
});
//# sourceMappingURL=main.js.map