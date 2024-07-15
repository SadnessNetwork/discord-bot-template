import { SuperEvent } from "@apps/mod.ts";
import { SuperClient } from "@client/mod.ts";
import { commands } from "@commands/mod.ts";
import { components } from "@components/mod.ts";
import { events } from "@events/mod.ts";
import { env } from "@utils/config.ts";
import { logger } from "@utils/mod.ts";
import { PACKAGE_VERSION } from "./src/version.ts";

if (import.meta.main) {
  const client = new SuperClient(
    env,
    commands,
    events as SuperEvent[],
    components
  );

  logger.info(`Version (${PACKAGE_VERSION})`);

  await client.start();
}

export * from "./src/mod.ts";
