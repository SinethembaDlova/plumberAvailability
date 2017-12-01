"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var plumberSchema = new mongoose_1.Schema({
    plumberName: {
        type: String,
        unique: true,
        sparse: true
    },
    password: String,
    contactNumber: Number,
    session: {
        day: String,
        slot: String
    }
});
plumberSchema.index({
    plumberName: 1
}, {
    unique: true
});
exports["default"] = mongoose_1.model('plumberDB', plumberSchema);
//# sourceMappingURL=plumberDB.js.map