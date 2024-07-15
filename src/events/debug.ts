import { EventExecute, SuperEvent } from "@apps/mod.ts";
import { Events, logger } from "@utils/mod.ts";

const DebugEventExecuteFunc: EventExecute<Events.APIDebug> = (_, msg) => {
  if (msg.includes("Heartbeat Ack")) return;

  logger.warning(msg);
};

const exportable = new SuperEvent<Events.APIDebug>()
  .setName(Events.APIDebug)
  .setExecute(DebugEventExecuteFunc);

export default exportable;
