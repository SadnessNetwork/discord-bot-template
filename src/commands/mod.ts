import { SuperCommand } from "@apps/mod.ts";
import { logger } from "@utils/mod.ts";
import { Collection } from "harmony/mod.ts";

export const commands = [];

export class CommandsCollection extends Collection<string, SuperCommand> {
  public constructor(commands: SuperCommand[]) {
    super();

    commands
      .filter((cause) => !cause.disabled)
      .forEach((raw) => {
        this.set(raw.name, raw);

        logger.success(`Command => Upload => (${raw.name})`);
      });
  }
}
