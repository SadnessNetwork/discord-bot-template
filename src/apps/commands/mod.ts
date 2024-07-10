import { SuperClient } from "@client/mod.ts";
import {
  ApplicationCommandInteraction,
  ApplicationCommandOption,
  PermissionResolvable,
  SlashCommandInteraction,
} from "harmony/mod.ts";

export type CommandExecuteReturn = ApplicationCommandInteraction | undefined;

export type CommandExecute = (
  client: SuperClient,
  interaction: SlashCommandInteraction
) => Promise<CommandExecuteReturn>;

export class SuperCommand {
  public name!: string;
  public description!: string;
  public options: ApplicationCommandOption[] = [];
  public memberPermissions!: PermissionResolvable;
  public isDevOnly = false;
  public disabled = false;
  public execute!: CommandExecute;

  public setName(name: string) {
    this.name = name;

    return this;
  }

  public setDescription(description: string) {
    this.description = description;

    return this;
  }

  public setOptions(...options: ApplicationCommandOption[]) {
    this.options = options;

    return this;
  }

  public addOption(option: ApplicationCommandOption) {
    this.options = [...this.options, option];

    return this;
  }

  public setExecute(func: typeof this.execute) {
    this.execute = func;

    return this;
  }

  public setMemberPermissions(perms: PermissionResolvable) {
    this.memberPermissions = perms;

    return this;
  }

  public setDevOnly(devOnly = true) {
    this.isDevOnly = devOnly;

    return this;
  }

  public json() {
    const { ...commandJson } = this;

    return commandJson;
  }

  public disable() {
    this.disabled = true;

    return this;
  }
}
