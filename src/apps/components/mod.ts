import { SuperClient } from "@client/mod.ts";
import { Interaction, MessageComponentInteraction } from "harmony/mod.ts";

export type ComponentExecuteReturn = Promise<Interaction | void> | void;
export type ComponentExecute = (
  client: SuperClient,
  interaction: MessageComponentInteraction
) => ComponentExecuteReturn;

export class SuperComponent {
  public customId!: RegExp;
  public execute!: ComponentExecute;

  public setCustomId(customId: RegExp) {
    this.customId = customId;

    return this;
  }

  public setExecute(execute: ComponentExecute) {
    this.execute = execute;

    return this;
  }
}
