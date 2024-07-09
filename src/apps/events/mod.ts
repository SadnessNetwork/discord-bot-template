import { SuperClient } from "@client/mod.ts";
import {
  ApplicationCommandInteraction,
  ClientEvents,
  Interaction,
  Message,
} from "harmony/mod.ts";

export type EventName = keyof ClientEvents;
export type EventArgs<Key extends EventName> = ClientEvents[Key];

export type PromiseTyped =
  | ApplicationCommandInteraction
  | Interaction
  | Message
  | undefined
  | void;
export type EventReturn = Promise<PromiseTyped> | Message | undefined | void;

export type EventExecute<Key extends EventName> = (
  client: SuperClient,
  ...args: EventArgs<Key>
) => EventReturn;

/**
 * ## Конструктор событий
 */
export class SuperEvent<Key extends EventName = EventName> {
  public name!: Key;
  public execute!: EventExecute<Key>;

  /**
   * ## Установка названия события
   */
  public setName(name: Key) {
    this.name = name;

    return this;
  }

  /**
   * ## Установка функции события
   */
  public setExecute(func: EventExecute<Key>) {
    this.execute = func;

    return this;
  }
}
