import EvalCommand from "@commands/admin/eval.ts";

import { SuperCommand } from "@apps/mod.ts";
import { Collection } from "harmony/mod.ts";

export const commands = [EvalCommand];

export class CommandsCollection extends Collection<string, SuperCommand> {
  public constructor(commands: SuperCommand[]) {
    super();

    commands
      .filter((cause) => !cause.disabled)
      .forEach((raw) => this.set(raw.name, raw));
  }
}
