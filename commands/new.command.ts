import { Command, Option } from "commander";
import { AbstractCommand } from "./absctract.command";
import { Input } from "./command.input";

export class NewCommand extends AbstractCommand {
  public load(program: Command): void {
    program
      .command("new [name]")
      .alias("n")
      .description("Create express application")
      .option("--directory [directory]", "Specify the destination directory")
      .action(async (name: string, option: Option, command: Command) => {
        const options: Input[] = [];
        options.push({ name: "directory", value: command.opts().directory });

        const inputs: Input[] = [];
        inputs.push({ name: 'name', value: name });

        await this.action.handle(inputs, options);
      });
  }
}