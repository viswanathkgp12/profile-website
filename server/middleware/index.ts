import { Application } from "express";

import { useProdMiddleware } from "./prodMiddleware";
import { useDevMiddleware } from "./devMiddleware";

/**
 * Front-end middleware
 */
export function setup(app: Application, options) {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    useProdMiddleware(app, options);
  } else {
    const webpackConfig = require("../../webpack.dev");
    useDevMiddleware(app, webpackConfig);
  }

  return app;
}
