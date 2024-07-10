import ready from "@events/ready.ts";

import { SuperEvent } from "@apps/mod.ts";
import { Collection } from "harmony/mod.ts";

export const events = [ready];

export class EventsCollection extends Collection<string, SuperEvent> {
  public constructor(events: SuperEvent[]) {
    super();

    events.forEach((raw) => this.set(raw.name, raw));
  }
}
