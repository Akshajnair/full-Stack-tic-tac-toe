import React, { Component } from "react";
import circle from "./assets/img/circle.svg";
import cross from "./assets/img/cross.svg";
import transparent from "./assets/img/transparent.svg";
export class Square extends Component {
  constructor(props) {
    super(props);
    this.onclick = this.onclick.bind(this);
  }
  callimg() {
    if (this.props.arr[this.props.key1].data === 1) return circle;
    else if (this.props.arr[this.props.key1].data === 2) return cross;
    else return transparent;
  }
  onclick() {
    this.props.userinput(this.props.key1);
  }
  render() {
    return (
      <div
        className={
          "u-effect-fade u-gallery-item u-gallery-item-" +
          this.props.arr[this.props.key1]
        }
        data-image-width="1280"
        data-image-height="720"
      >
        <div
          className="u-back-slide"
          data-image-width="685"
          data-image-height="685"
        >
          <img
            className={"u-back-image u-expanded u-back-image-" + this.props.num}
            src={this.callimg()}
            alt=""
          />
        </div>
        <div
          className={"u-over-slide u-shading u-over-slide-" + this.props.num}
          onClick={this.onclick}
        ></div>
      </div>
    );
  }
}

export default Square;
