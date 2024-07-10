import { Collection } from "harmony/mod.ts";
import { SuperComponent } from "../apps/mod.ts";

export const components = [];

export class ComponentsCollection extends Collection<RegExp, SuperComponent> {
  public constructor(components: SuperComponent[]) {
    super();

    components.forEach((raw) => this.set(raw.customId, raw));
  }
}
