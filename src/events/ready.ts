import { EventExecute, SuperEvent } from "@apps/mod.ts";
import { Events, logger } from "@utils/mod.ts";

const ClientReadyEventExecuteFunc: EventExecute<
  Events.APIClientReady
> = async ({ interactions, commands, user, guilds }) => {
  const jsonCommands = commands.array().map((raw) => raw.json());
  const guildsArray = await guilds.array();

  // TODO: Add discord raitlimit bypass if the json of commands has not changed.

  await interactions.commands.bulkEdit(jsonCommands);

  logger.info(
    `Guilds (${guildsArray.length}) [${guildsArray
      .map((raw) => `"${raw.name}"`)
      .join(", ")}]`
  );
  logger.info(`Client (${user?.tag})`);
};

const exportable = new SuperEvent<Events.APIClientReady>()
  .setName(Events.APIClientReady)
  .setExecute(ClientReadyEventExecuteFunc);

export default exportable;
