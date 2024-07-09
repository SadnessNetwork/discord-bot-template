// Импорты команд
import EvalCommand from "@commands/admin/eval.ts";

// Импорты планировки
import { SuperCommand } from "@apps/mod.ts";
import { Collection } from "harmony/mod.ts";

export const commands = [EvalCommand];

/**
 * ## Коллекция команд
 */
export class CommandsCollection extends Collection<string, SuperCommand> {
  /**
   * ## Конструктор коллекции команд
   */
  public constructor(commands: SuperCommand[]) {
    super();

    // Фильтрация команд по отключенным и добавление в коллекцию
    commands
      .filter((cause) => !cause.disabled)
      .forEach((raw) => this.set(raw.name, raw));
  }
}
