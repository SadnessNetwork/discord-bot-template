import { load } from "std/dotenv/mod.ts";

export interface Env {
  DISCORD_TOKEN: string;
  DISCORD_CLIENT_ID: string;
  DISCORD_DEVELOPER_IDS: string;
  DB_CONNECTION: string;
  MODE: "development" | "production" | string;
}

/**
 * ## Получение переменных окружения
 */
export const getEnvariables = async () =>
  ((Deno.env.get("MODE") as Env["MODE"]) === "production"
    ? Deno.env.toObject()
    : await load()) as unknown as Env;

/**
 * ## Переменные окружения
 */
export const env = await getEnvariables();
