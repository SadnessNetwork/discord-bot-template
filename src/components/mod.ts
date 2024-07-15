import deleteMessage from "@components/delete_message.ts";

import { SuperComponent } from "@apps/mod.ts";
import { logger } from "@utils/mod.ts";
import { Collection } from "harmony/mod.ts";

export const components = [deleteMessage];

export class ComponentsCollection extends Collection<RegExp, SuperComponent> {
  public constructor(components: SuperComponent[]) {
    super();

    components.forEach((raw) => {
      this.set(raw.customId, raw);

      logger.success(`Components => Upload => (${raw.customId.source})`);
    });
  }
}
