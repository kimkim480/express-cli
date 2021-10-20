#!/usr/bin/env node
import { Command } from "commander";
import { CommandLoader } from "../commands/command.loader";
import packageFile from "../package.json";

function main() {
  const program = new Command();
  program
    .version(
      packageFile.version,
      "-v, --version",
      "Output the current version."
    )
    .usage("<command> [options]")
    .helpOption("-h, --help", "Output usage information.");

    CommandLoader.load(program);

    program.parse(process.argv);
}

main();