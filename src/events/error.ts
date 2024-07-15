import { EventExecute, SuperEvent } from "@apps/mod.ts";
import { Events, logger } from "@utils/mod.ts";

const ErrorEventExecuteFunc: EventExecute<Events.APIError> = (_, err) => {
  if (err instanceof Error) {
    logger.error(`${err.name}`);
    logger.error(`${err.cause}`);
    logger.error(`${err.message}`);
    logger.error(`${err.stack}`);
  } else {
    logger.error(err);
  }
};

const exportable = new SuperEvent<Events.APIError>()
  .setName(Events.APIError)
  .setExecute(ErrorEventExecuteFunc);

export default exportable;
