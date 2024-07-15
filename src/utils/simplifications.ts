import { ApplicationCommandInteraction, Embed } from "harmony/mod.ts";

export const eReply = async (
  content: string,
  ctx: ApplicationCommandInteraction,
  ephemeral = true
) => await ctx.reply({ content, ephemeral });

export const eReplyEmbed = async (
  embed: Embed | Embed[],
  ctx: ApplicationCommandInteraction,
  ephemeral = true
) =>
  await ctx.reply({
    embeds: embed instanceof Embed ? [embed] : embed,
    ephemeral,
  });
