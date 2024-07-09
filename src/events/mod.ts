// Импорты команд
import ready from "@events/ready.ts";

// Импорты планировки
import { SuperEvent } from "@apps/mod.ts";
import { Collection } from "harmony/mod.ts";

export const events = [ready];

/**
 * ## Коллекция событий
 */
export class EventsCollection extends Collection<string, SuperEvent> {
  /**
   * ## Конструктор коллекции событий
   */
  public constructor(events: SuperEvent[]) {
    super();

    // Добавление событий в коллекцию
    events.forEach((raw) => this.set(raw.name, raw));
  }
}
