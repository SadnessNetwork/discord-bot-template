import { SuperEvent } from "@apps/mod.ts";
import { SuperClient } from "@client/mod.ts";
import { commands } from "@commands/mod.ts";
import { components } from "@components/mod.ts";
import { events } from "@events/mod.ts";
import { env } from "@utils/config.ts";
import { PACKAGE_VERSION } from "./src/version.ts";

if (import.meta.main) {
  const client = new SuperClient(
    env,
    commands,
    events as SuperEvent[],
    components
  );

  console.log("Starting client...");
  console.log(`Author: sotiesman AKA Sadness\nVersion: ${PACKAGE_VERSION}`);

  await client.start();
}

export * from "./src/mod.ts";
