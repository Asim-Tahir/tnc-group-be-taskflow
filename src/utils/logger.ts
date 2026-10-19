import { styleText } from "node:util";
import pkg from "#pkg" with { type: "json" };

const logger = {
  get _prefix(): string {
    return pkg.name;
  },

  get _styledPrefix(): string {
    return styleText(["greenBright", "bold", "italic"], this._prefix);
  },

  /**
   * The **`console.log()`** static method outputs a message to the console.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static)
   */
  log(...messages: Array<unknown>) {
    console.log(this._styledPrefix, ...messages);
  },

  /**
   * The **`console.info()`** static method outputs a message to the console at the "info" log level. The message is only displayed to the user if the console is configured to display info output. In most cases, the log level is configured within the console UI. The message may receive special formatting, such as a small "i" icon next to it.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static)
   */
  info(...messages: Array<unknown>) {
    console.info(this._styledPrefix, styleText(["bgBlue", "white"], " INFO "), ...messages);
  },

  /**
   * The **`console.warn()`** static method outputs a warning message to the console at the "warning" log level. The message is only displayed to the user if the console is configured to display warning output. In most cases, the log level is configured within the console UI. The message may receive special formatting, such as yellow colors and a warning icon.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static)
   */
  warn(...messages: Array<unknown>) {
    console.warn(this._styledPrefix, styleText(["bgYellowBright", "black"], " WARN "), ...messages);
  },

  /**
   * The **`console.error()`** static method outputs a message to the console at the "error" log level. The message is only displayed to the user if the console is configured to display error output. In most cases, the log level is configured within the console UI. The message may be formatted as an error, with red colors and call stack information.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static)
   */
  error(...messages: Array<unknown>) {
    console.error(this._styledPrefix, styleText(["bgRedBright", "white"], " ERROR "), ...messages);
  },

  /**
   * The **`console.debug()`** static method outputs a message to the console at the "debug" log level. The message is only displayed to the user if the console is configured to display debug output. In most cases, the log level is configured within the console UI. This log level might correspond to the Debug or Verbose log level.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static)
   */
  debug(...messages: Array<unknown>) {
    console.debug(this._styledPrefix, styleText(["bgGreenBright", "black"], " DEBUG "), ...messages);
  },

  /**
   * The **`console.trace()`** static method outputs a stack trace to the console.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static)
   */
  trace(...messages: Array<unknown>) {
    console.trace(this._prefix, styleText(["bgRed", "white"], " TRACE "), ...messages);
  },
};

export default logger;