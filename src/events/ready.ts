import { SuperEvent } from "@apps/mod.ts";
import { Events } from "@utils/mod.ts";

export default new SuperEvent<Events.APIClientReady>()
  .setName(Events.APIClientReady)
  .setExecute(async ({ interactions, commands }) => {
    // Регистрируем все команды
    const jsonCommands = commands.array().map((raw) => raw.json());

    // Применяем все изменения
    await interactions.commands.bulkEdit(jsonCommands);
  });
