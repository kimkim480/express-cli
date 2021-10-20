import { Input } from "../commands";
import { AbstractAction } from "./abstract.action";

export class GenerateAction extends AbstractAction {
  public async handle(
    inputs?: Input[],
    options?: Input[],
    extraFlags?: string[]
  ): Promise<void> {
    console.log(inputs);

    await generateFiles(inputs!);
  }
}

async function generateFiles(inputs: Input[]) {
  const schematic = inputs.find((input) => input.name === "schematics")?.value;
  console.log(schematic);
}

async function buildModule() {
  
}