import { SuperClient } from "@client/mod.ts";
import {
  ApplicationCommandInteraction,
  ApplicationCommandOption,
  SlashCommandInteraction,
} from "harmony/mod.ts";

export type CommandExecuteReturn = ApplicationCommandInteraction | undefined;

export type CommandExecute = (
  client: SuperClient,
  interaction: SlashCommandInteraction
) => Promise<CommandExecuteReturn>;

/**
 * ## Конструктор команд
 */
export class SuperCommand {
  public name!: string;
  public description!: string;
  public options: ApplicationCommandOption[] = [];
  public disabled = false;
  public execute!: CommandExecute;

  /**
   * ## Установка названия команды
   */
  public setName(name: string) {
    this.name = name;

    return this;
  }

  /**
   * ## Установка описания команды
   */
  public setDescription(description: string) {
    this.description = description;

    return this;
  }

  /**
   * ## Установка опций команды
   */
  public setOptions(...options: ApplicationCommandOption[]) {
    this.options = options;

    return this;
  }

  /**
   * ## Добавление опции команды
   */
  public addOption(option: ApplicationCommandOption) {
    this.options = [...this.options, option];

    return this;
  }

  /**
   * ## Установка функции выполнения команды
   */
  public setExecute(func: typeof this.execute) {
    this.execute = func;

    return this;
  }

  /**
   * ## Получение JSON команды
   */
  public json() {
    const { ...commandJson } = this;

    return commandJson;
  }

  /**
   * ## Выключение команды
   */
  public disable() {
    this.disabled = true;

    return this;
  }
}
