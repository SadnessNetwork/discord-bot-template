import { ComponentExecute, SuperComponent } from "@apps/mod.ts";

const DeleteMessageComponentFunc: ComponentExecute = async (_, ctx) =>
  await ctx.message.delete();

const exportable = new SuperComponent()
  .setCustomId(/delete_message/)
  .setExecute(DeleteMessageComponentFunc);

export default exportable;
