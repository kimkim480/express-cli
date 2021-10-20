"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLoader = void 0;
var actions_1 = require("../actions");
var generate_action_1 = require("../actions/generate.action");
var generate_command_1 = require("./generate.command");
var new_command_1 = require("./new.command");
var CommandLoader = /** @class */ (function () {
    function CommandLoader() {
    }
    CommandLoader.load = function (program) {
        new new_command_1.NewCommand(new actions_1.newAction()).load(program);
        new generate_command_1.GenerateCommand(new generate_action_1.GenerateAction()).load(program);
    };
    return CommandLoader;
}());
exports.CommandLoader = CommandLoader;
