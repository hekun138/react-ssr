//完成react ssr工作的中间件，组件在服务端渲染的逻辑都在这个文件里

//引入Index组件
import React from "react";
//引入index组件
import Index from "../../client/pages/index";
import { renderToString } from "react-dom/server";

export default (ctx, next) => {
  const html = renderToString(<Index />);
  ctx.body = `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>my react ssr</title>
    </head>
    <body>
      <div id="root">
        ${html}
      </div>
    </body>
    <script type="text/javascript" src="index.js"></script>
    </html>
  `;

  return next();
};
