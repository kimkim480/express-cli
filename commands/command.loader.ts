import { Command } from "commander";
import { newAction } from "../actions";
import { GenerateAction } from "../actions/generate.action";
import { GenerateCommand } from "./generate.command";
import { NewCommand } from "./new.command";

export class CommandLoader {
  public static load(program: Command): void {
    new NewCommand(new newAction()).load(program);
    new GenerateCommand(new GenerateAction()).load(program);
  }
}