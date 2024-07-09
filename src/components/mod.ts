// Импорты discord компонентов
// ---

// Импорты планировки
import { Collection } from "harmony/mod.ts";
import { SuperComponent } from "../apps/mod.ts";

export const components = [];

/**
 * ## Коллекция компонентов
 */
export class ComponentsCollection extends Collection<RegExp, SuperComponent> {
  /**
   * ## Конструктор коллекции компонентов
   */
  public constructor(components: SuperComponent[]) {
    super();

    // Добавление компонентов в коллекцию
    components.forEach((raw) => this.set(raw.customId, raw));
  }
}
