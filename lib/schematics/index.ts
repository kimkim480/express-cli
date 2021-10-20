export interface Schematic {
  name: string;
  alias: string;
  description: string;
}

export const schematics: Schematic[] = [
  {
    name: 'module',
    alias: 'module',
    description: 'Generate a new module',
  },
  {
    name: 'useCase',
    alias: 'useCase',
    description: 'Generate a new useCase',
  },
];