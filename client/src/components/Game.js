import React, { Component } from "react";
import { Link } from "react-router-dom";
import board from "./assets/img/board.svg";
import Square from "./Square";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { place: 1, data: 0 },
        { place: 2, data: 0 },
        { place: 3, data: 0 },
        { place: 4, data: 0 },
        { place: 5, data: 0 },
        { place: 6, data: 0 },
        { place: 7, data: 0 },
        { place: 8, data: 0 },
        { place: 9, data: 0 },
      ],
      turn: 0,
    };
    this.userinput = this.userinput.bind(this);
    this.reset = this.reset.bind(this);
  }
  async userinput(place) {
    if (this.state.arr[place].data === 0) {
      let arr = [...this.state.arr];
      let move = { ...arr[place] };
      if (this.state.turn % 2 === 0) move.data = 1;
      else move.data = 2;
      arr[place] = move;
      this.setState({ arr });
      this.setState({ turn: this.state.turn + 1 });
    }
    console.log(place);
    this.ifwon();
  }
  async ifwon() {
    await this.userinput();
    console.log(this.state.turn);
    let this1 = this.state.arr;
    if (this.state.turn >= 4) {
      if (this1[0].data === this1[1].data && this1[1].data === this1[2].data) {
        console.log("yolo");
      }
    }
  }
  reset() {
    let arr = [
      { place: 1, data: 0 },
      { place: 2, data: 0 },
      { place: 3, data: 0 },
      { place: 4, data: 0 },
      { place: 5, data: 0 },
      { place: 6, data: 0 },
      { place: 7, data: 0 },
      { place: 8, data: 0 },
      { place: 9, data: 0 },
    ];
    this.setState({ arr });
  }
  squaredisp() {
    return this.state.arr.map((slide, key) => {
      return (
        <Square key1={key} arr={this.state.arr} userinput={this.userinput} />
      );
    });
  }
  render() {
    return (
      <div>
        <section
          className="u-align-center u-clearfix u-custom-color-2 u-section-2"
          id="sec-2bf1"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <Link to="/">
              <a
                href=""
                className="u-border-3 u-border-active-palette-2-dark-1 u-border-custom-color-2 u-border-hover-custom-color-1 u-btn u-button-style u-none u-text-custom-color-1 u-text-hover-custom-color-1 u-btn-1"
              >
                BACK
              </a>
            </Link>
            <a
              href=""
              class="u-border-3 u-border-active-palette-2-dark-1 u-border-custom-color-2 u-border-hover-custom-color-1 u-btn u-button-style u-none u-text-custom-color-1 u-text-hover-custom-color-1 u-btn-2"
              onClick={this.reset}
            >
              Reset
            </a>
            <img
              src={board}
              alt=""
              className="u-expanded-width-md u-expanded-width-xs u-image u-image-default u-image-1"
              data-image-width="666"
              data-image-height="666"
            />
            <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gallery u-layout-grid u-show-text-on-hover u-gallery-1">
              <div className="u-gallery-inner u-gallery-inner-1">
                {this.squaredisp()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Game;
