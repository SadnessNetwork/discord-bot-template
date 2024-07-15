/**
 * This command does not work, it is only an example.
 *
 * @tamplete
 */

import { CommandExecute, SuperCommand } from "@apps/mod.ts";
import {
  ApplicationCommandOption,
  ApplicationCommandOptionType,
} from "harmony/mod.ts";

const OptionsData: ApplicationCommandOption[] = [
  {
    name: "code",
    description: "The code to execute.",
    type: ApplicationCommandOptionType.STRING,
    required: true,
  },
];

const EvalCommandExecuteFunc: CommandExecute = async (_, ctx) => {
  const [StringCode] = [ctx.option<string>("code")];

  const EvalReturned = eval(StringCode);

  if (EvalReturned instanceof Promise) {
    await EvalReturned;
  }

  return await ctx.reply(`\`\`\`js\n${EvalReturned}\`\`\``);
};

const exportable = new SuperCommand()
  .setName("eval")
  .setDescription("Execute code in the bot's environment.")
  .setDevOnly(true)
  .setOptions(...OptionsData)
  .setExecute(EvalCommandExecuteFunc);

export default exportable;
