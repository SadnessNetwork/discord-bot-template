import { EventExecute, SuperEvent } from "@apps/mod.ts";
import { embedDefault } from "@context/colors.ts";
import { eReply, eReplyEmbed, Events, logger } from "@utils/mod.ts";
import { Embed } from "harmony/mod.ts";

const InteractionCreateEventExecuteFunc: EventExecute<
  Events.APIInteractionCreate
> = async (client, ctx) => {
  const { commands, components } = client;

  if (ctx.isApplicationCommand()) {
    const command = commands.get(name);

    if (!command) return;
    if (!ctx.guild) return;

    if (!ctx.member?.permissions.has(command.memberPermissions, true)) {
      if (command.isDevOnly === true) return;

      const embedDontHavePermission = new Embed({
        color: embedDefault,
        description: `You don't have permission to use this command.`,
      });

      return await eReplyEmbed(embedDontHavePermission, ctx);
    }

    return await command.execute(client, ctx).catch(async (e) => {
      logger.error(e);

      await eReply("Unknown error happened!", ctx, false);
    });
  }

  if (ctx.isMessageComponent()) {
    const component = components.find((row) =>
      row.customId.test(ctx.data.custom_id)
    );

    if (!component) return;

    return await component.execute(client, ctx)?.catch((e) => logger.error(e));
  }
};

const exportable = new SuperEvent<Events.APIInteractionCreate>()
  .setName(Events.APIInteractionCreate)
  .setExecute(InteractionCreateEventExecuteFunc);

export default exportable;
