import chalk from "chalk";
import emoji from "node-emoji";
import * as shelljs from "shelljs";

import { Input } from "../commands";
import { app } from "../lib/schemas/app.schema";
import { dependencies, devDependencies } from "../lib/schemas/default.schema";
import { server } from "../lib/schemas/server.schema";
import { AbstractAction } from "./abstract.action";

export class newAction extends AbstractAction {
  public async handle(inputs: Input[], options: Input[]): Promise<void> {
    await generateAppFiles(inputs, options);
  }
}

async function generateAppFiles(
  args: Input[],
  options: Input[]
): Promise<void> {
  let path: string = shelljs.pwd();

  if (!args[0].value) {
    const warning = emoji.get("warning");
    print(`${warning}  You must specify a project name.`, "red");
    return;
  }

  const directoryOption = options.find((option) => option.name === "directory");

  if (directoryOption?.value) {
    path = `${directoryOption.value.toString()}/${args[0].value}`;
  } else {
    path = `${path}/${args[0].value}`;
  }

  const rocket = emoji.get("rocket");
  print(`${rocket} Creating new app in ${path}`, "green");

  shelljs.mkdir("-p", path); // Create app directory
  shelljs.cd(path); // Change directory
  shelljs.exec("yarn init -y");
  const packageJson = shelljs.cat("package.json"); // Read package.json
  const packageJsonObject = JSON.parse(packageJson);

  packageJsonObject.dependencies = dependencies; // Add dependencies
  packageJsonObject.devDependencies = devDependencies; // Add devDependencies

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
  shelljs.ShellString(server).to("src/shared/infra/http/server.ts");
  shelljs.ShellString(app).to("src/shared/infra/http/app.ts");

  shelljs.exec("yarn"); // Install dependencies
  print(`${rocket} App created successfully!`, "green");
}

function print(message: string, color: string): void {
  const colorize = chalk.keyword(color);
  return console.log(colorize(message));
}
