import { EventExecute, SuperEvent } from "@apps/mod.ts";
import { Events } from "@utils/mod.ts";

const ClientReadyEventExecuteFunc: EventExecute<
  Events.APIClientReady
> = async ({ interactions, commands }) => {
  const jsonCommands = commands.array().map((raw) => raw.json());

  await interactions.commands.bulkEdit(jsonCommands);
};

const exportable = new SuperEvent<Events.APIClientReady>()
  .setName(Events.APIClientReady)
  .setExecute(ClientReadyEventExecuteFunc);

export default exportable;
