//浏览器端执行组件渲染的入口文件
import React from "react";
import ReactDom from "react-dom";
import Index from "../pages/index";

//渲染index组件到页面
ReactDom.hydrate(<Index />, document.getElementById("root"));
