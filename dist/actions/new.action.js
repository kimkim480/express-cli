"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newAction = void 0;
var chalk_1 = __importDefault(require("chalk"));
var node_emoji_1 = __importDefault(require("node-emoji"));
var shelljs = __importStar(require("shelljs"));
var app_schema_1 = require("../lib/schemas/app.schema");
var default_schema_1 = require("../lib/schemas/default.schema");
var server_schema_1 = require("../lib/schemas/server.schema");
var abstract_action_1 = require("./abstract.action");
var newAction = /** @class */ (function (_super) {
    __extends(newAction, _super);
    function newAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    newAction.prototype.handle = function (inputs, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, generateAppFiles(inputs, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return newAction;
}(abstract_action_1.AbstractAction));
exports.newAction = newAction;
function generateAppFiles(args, options) {
    return __awaiter(this, void 0, void 0, function () {
        var path, warning, directoryOption, rocket, packageJson, packageJsonObject;
        return __generator(this, function (_a) {
            path = shelljs.pwd();
            if (!args[0].value) {
                warning = node_emoji_1.default.get("warning");
                print(warning + "  You must specify a project name.", "red");
                return [2 /*return*/];
            }
            directoryOption = options.find(function (option) { return option.name === "directory"; });
            if (directoryOption === null || directoryOption === void 0 ? void 0 : directoryOption.value) {
                path = directoryOption.value.toString() + "/" + args[0].value;
            }
            else {
                path = path + "/" + args[0].value;
            }
            rocket = node_emoji_1.default.get("rocket");
            print(rocket + " Creating new app in " + path, "green");
            shelljs.mkdir("-p", path); // Create app directory
            shelljs.cd(path); // Change directory
            shelljs.exec("yarn init -y");
            packageJson = shelljs.cat("package.json");
            packageJsonObject = JSON.parse(packageJson);
            packageJsonObject.dependencies = default_schema_1.dependencies; // Add dependencies
            packageJsonObject.devDependencies = default_schema_1.devDependencies; // Add devDependencies
            shelljs
                .ShellString(JSON.stringify(packageJsonObject, null, 2))
                .to("package.json"); // Write package.json
            // create app basic directory structure
            shelljs.mkdir("-p", [
                "src",
                "src/config",
                "src/modules",
                "src/utils",
                "src/shared",
                "src/shared/errors",
                "src/shared/container",
                "src/shared/infra",
                "src/shared/infra/http",
                "src/shared/infra/http/middlewares",
                "src/shared/infra/http/routes",
            ]);
            // create app basic files
            shelljs.touch([
                ".env",
                "src/shared/infra/http/app.ts",
                "src/shared/infra/http/server.ts",
            ]);
            shelljs.ShellString("API_PORT=3000").to(".env");
            shelljs.ShellString(server_schema_1.server).to("src/shared/infra/http/server.ts");
            shelljs.ShellString(app_schema_1.app).to("src/shared/infra/http/app.ts");
            shelljs.exec("yarn"); // Install dependencies
            print(rocket + " App created successfully!", "green");
            return [2 /*return*/];
        });
    });
}
function print(message, color) {
    var colorize = chalk_1.default.keyword(color);
    return console.log(colorize(message));
}
