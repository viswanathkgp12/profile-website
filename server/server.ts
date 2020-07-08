import express from "express";
import * as path from "path";

import { setup } from "./middleware";
import { render } from "render";

const app = express();
let port = 9000;

setup(app, {
  outputPath: path.resolve(process.cwd(), "build"),
  publicPath: "/",
});

app.use(render);

const customHost = process.env.HOST || "localhost";

app.get("*.js", (req, res, next) => {
  req.url = req.url + ".gz"; // eslint-disable-line
  res.set("Content-Encoding", "gzip");
  next();
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `==> Listening on port ${port}. Open up http://${customHost}:${port}/ in your browser.`
    );
  }
});
