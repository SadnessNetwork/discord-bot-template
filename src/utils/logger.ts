import * as w from "winston/mod.ts";
import { APP_NAME } from "../mod.ts";

const transport = [new w.ConsoleTransport()];

const config: w.Config = {
  format: w.Format.text,
  logColors: {
    Error: w.Color.Red,
    Info: w.Color.Cyan,
    Success: w.Color.Green,
    Warning: w.Color.Yellow,
  },
  prefix: new w.Prefix(APP_NAME),
  logLevelDisplay: w.LogLevelDisplay.Text,
};

export const logger = new w.Houston(transport, config);
