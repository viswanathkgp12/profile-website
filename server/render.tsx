import React from "react";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import App from "../src/App";

export function render(req, res) {
  const context: any = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.write(markup);
    res.end();
  }
}
