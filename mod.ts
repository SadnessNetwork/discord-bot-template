import { SuperEvent } from "@apps/mod.ts";
import { SuperClient } from "@client/mod.ts";
import { commands } from "@commands/mod.ts";
import { components } from "@components/mod.ts";
import { events } from "@events/mod.ts";
import { env } from "@utils/config.ts";

// Запуск модуля
if (import.meta.main) {
  const client = new SuperClient(
    env,
    commands,
    events as SuperEvent[],
    components
  );

  await client.start();
}

// Экспорт модулей
export * from "./src/mod.ts";
