#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var command_loader_1 = require("../commands/command.loader");
var package_json_1 = __importDefault(require("../package.json"));
function main() {
    var program = new commander_1.Command();
    program
        .version(package_json_1.default.version, "-v, --version", "Output the current version.")
        .usage("<command> [options]")
        .helpOption("-h, --help", "Output usage information.");
    command_loader_1.CommandLoader.load(program);
    program.parse(process.argv);
}
main();
