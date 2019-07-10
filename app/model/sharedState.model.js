"use strict";
const core_1 = require("@angular/core");
(function (MODES) {
    MODES[MODES["CREATE"] = 0] = "CREATE";
    MODES[MODES["EDIT"] = 1] = "EDIT";
})(exports.MODES || (exports.MODES = {}));
var MODES = exports.MODES;
class SharedState {
    constructor(mode, id) {
        this.mode = mode;
        this.id = id;
    }
}
exports.SharedState = SharedState;
exports.SHARED_STATE = new core_1.OpaqueToken("shared_state");
