"use strict";
class Message {
    constructor(text, error = false) {
        this.text = text;
        this.error = error;
    }
}
exports.Message = Message;
