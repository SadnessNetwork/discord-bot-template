import { SuperCommand, SuperComponent, SuperEvent } from "@apps/mod.ts";
import { CommandsCollection } from "@commands/mod.ts";
import { ComponentsCollection } from "@components/mod.ts";
import { DiscordIntents } from "@context/mod.ts";
import { PrismaClient } from "@db";
import { EventsCollection } from "@events/mod.ts";
import { Env } from "@utils/mod.ts";
import { Client, Collection } from "harmony/mod.ts";

export class SuperClient extends Client {
  public commands: Collection<string, SuperCommand>;
  public components: Collection<RegExp, SuperComponent>;
  public events: Collection<string, SuperEvent>;

  public db: PrismaClient;
  public devIds: string[];

  constructor(
    env: Env,
    commands: SuperCommand[],
    events: SuperEvent[],
    components: SuperComponent[]
  ) {
    super();

    this.commands = new CommandsCollection(commands);
    this.components = new ComponentsCollection(components);
    this.events = new EventsCollection(events);

    this.devIds = env.DISCORD_DEVELOPER_IDS.split(",");
    this.token = env.DISCORD_TOKEN;

    this.db = new PrismaClient();

    this.events.array().forEach((event) =>
      // deno-lint-ignore no-explicit-any
      this.on(event.name, event.execute.bind(null, this) as any)
    );
  }

  public async start() {
    await this.db.$connect();

    await this.connect(this.token, DiscordIntents);
  }
}
