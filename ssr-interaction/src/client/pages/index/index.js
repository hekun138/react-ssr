import React from "react";

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerClick() {
    alert("一起来玩react ssr呀");
  }

  render() {
    return <h1 onClick={this.handlerClick}>click here!</h1>;
  }
}
