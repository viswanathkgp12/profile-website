import path from "path";
import webpack from "webpack";
import WebpackDevMiddleware from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";
import { Application } from "express";

export function useDevMiddleware(app: Application, webpackConfig) {
  let compiler = webpack(webpackConfig);

  const middleware = WebpackDevMiddleware(compiler, {
    logLevel: "warn",
    publicPath: webpackConfig.output.publicPath,
    stats: "errors-only",
  });

  app.use(middleware);

  app.use(WebpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get("*", (req, res) => {
    fs.readFile(path.join(compiler.outputPath, "index.html"), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}
