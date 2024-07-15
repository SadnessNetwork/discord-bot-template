import modeDev from "@events/debug.ts";
import err from "@events/error.ts";
import interactions from "@events/interactions.ts";
import ready from "@events/ready.ts";

import { SuperEvent } from "@apps/mod.ts";
import { logger } from "@utils/mod.ts";
import { Collection } from "harmony/mod.ts";

export const events = [ready, interactions, err, modeDev];

export class EventsCollection extends Collection<string, SuperEvent> {
  public constructor(events: SuperEvent[]) {
    super();

    events.forEach((raw) => {
      this.set(raw.name, raw);

      logger.success(`Event => Upload => (${raw.name})`);
    });
  }
}
