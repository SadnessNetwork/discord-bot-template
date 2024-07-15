type Version = `v${number}.${number}.${number}`;
type App = `${string}:${string}`;

const PACKAGE_VERSION: Version = "v0.1.0";

/**
 * @argument ServerName - The name of the Discord guild.
 * @argument Module - The name of the module.
 *
 * @example
 * MyBotCommunity:Moderation
 */
const APP_NAME: App = `ServerName:Module`;

export { APP_NAME, PACKAGE_VERSION };
