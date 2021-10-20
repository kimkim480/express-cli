import Table from "cli-table3";
import chalk from "chalk";
import { Command, Option } from "commander";
import { Input } from "./command.input";
import { AbstractCommand } from "./absctract.command";
import { schematics } from "../lib/schematics";

export class GenerateCommand extends AbstractCommand {
  public load(program: Command): void {
    program
      .command("generate <schematics> <name> [path]")
      .alias("g")
      .description(this.buildDescription())
      .action(async (
        schematic: string,
        name: string,
        path: string,
        option: Option,
        Command: Command
      ) => {
        const inputs: Input[] = [];
        inputs.push({ name: "schematics", value: schematic });
        inputs.push({ name: "name", value: name });
        inputs.push({ name: "path", value: path });

        await this.action.handle(inputs);
      });
  }

  private buildDescription(): string {
    return (
      'Generate a new element.\n' +
      '  Available schematics:\n' +
      this.buildSchematicsListAsTable()
    );
  }

  private buildSchematicsListAsTable(): string {
    const leftMargin = '    ';
    const tableConfig = {
      head: ['name', 'alias', 'description'],
      chars: {
        'left': leftMargin.concat('│'),
        'top-left': leftMargin.concat('┌'),
        'bottom-left': leftMargin.concat('└'),
        'mid': '',
        'left-mid': '',
        'mid-mid': '',
        'right-mid': '',
      },
    };
    const table: any = new Table(tableConfig);
    for (const schematic of schematics) {
      table.push([
        chalk.green(schematic.name),
        chalk.cyan(schematic.alias),
        schematic.description,
      ]);
    }
    return table.toString();
  }

}