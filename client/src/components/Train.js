import React, { Component } from "react";
import { Link } from "react-router-dom";
import board from "./assets/img/board.svg";
import Square from "./Square";
import Dbcon from "./Dbcon";

export class Train extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { place: 1, data: 0, turn: 0 },
        { place: 2, data: 0, turn: 0 },
        { place: 3, data: 0, turn: 0 },
        { place: 4, data: 0, turn: 0 },
        { place: 5, data: 0, turn: 0 },
        { place: 6, data: 0, turn: 0 },
        { place: 7, data: 0, turn: 0 },
        { place: 8, data: 0, turn: 0 },
        { place: 9, data: 0, turn: 0 },
      ],
      gameplay: [
        { place: 1 },
        { place: 2 },
        { place: 3 },
        { place: 4 },
        { place: 5 },
        { place: 6 },
        { place: 7 },
        { place: 8 },
        { place: 9 },
      ],
      play: 0,
      result: 0,
      completed: 0,
    };
    this.userinput = this.userinput.bind(this);
    this.recur = this.recur.bind(this);
    this.ifwon = this.ifwon.bind(this);
  }
  componentDidMount() {
    let this1 = this;
    Dbcon.lastobj(function (res) {
      console.log(res);
      this1.setState({ completed: res.len, gameplay: res.lastarr });
    });
  }
  userinput(place) {}

  recur() {
    let gameplay = this.state.gameplay;
    let arr = this.state.arr;
    var promise = new Promise((resolve) => {

      
      arr[gameplay[0].place - 1].data = 1;
      arr[gameplay[1].place - 1].data = 2;
      arr[gameplay[2].place - 1].data = 1;
      arr[gameplay[3].place - 1].data = 2;
      arr[gameplay[4].place - 1].data = 1;
      arr[gameplay[5].place - 1].data = 2;
      arr[gameplay[6].place - 1].data = 1;
      arr[gameplay[7].place - 1].data = 2;
      arr[gameplay[8].place - 1].data = 1;

      arr[gameplay[0].place - 1].turn = gameplay[0].place;
      arr[gameplay[1].place - 1].turn = gameplay[1].place;
      arr[gameplay[2].place - 1].turn = gameplay[2].place;
      arr[gameplay[3].place - 1].turn = gameplay[3].place;
      arr[gameplay[4].place - 1].turn = gameplay[4].place;
      arr[gameplay[5].place - 1].turn = gameplay[5].place;
      arr[gameplay[6].place - 1].turn = gameplay[6].place;
      arr[gameplay[7].place - 1].turn = gameplay[7].place;
      arr[gameplay[8].place - 1].turn = gameplay[8].place;
      this.setState({
        gameplay,
        arr,
        completed: this.state.completed + 1,
      });
      console.log(gameplay);
      resolve(1);
    });
    promise.then((bool) => this.ifwon());
  }

  async playnextmove() {}
  async ifwon(place) {
    let this1 = this.state.arr;
    this.playnextmove();
    let result = { a: 0, b: 0, c: 0, mark: 0 };
    if (this.state.play >= 5) {
      if (
        this1[0].data === this1[1].data &&
        this1[1].data === this1[2].data &&
        this1[0].data !== 0
      )
        result = { a: 0, b: 1, c: 2, mark: this1[0].data };
      if (
        this1[3].data === this1[4].data &&
        this1[4].data === this1[5].data &&
        this1[3].data !== 0
      )
        result = { a: 3, b: 4, c: 5, mark: this1[3].data };
      if (
        this1[6].data === this1[7].data &&
        this1[7].data === this1[8].data &&
        this1[6].data !== 0
      )
        result = { a: 6, b: 7, c: 8, mark: this1[6].data };
      if (
        this1[0].data === this1[3].data &&
        this1[3].data === this1[6].data &&
        this1[0].data !== 0
      )
        result = { a: 0, b: 3, c: 6, mark: this1[0].data };
      if (
        this1[1].data === this1[4].data &&
        this1[4].data === this1[7].data &&
        this1[1].data !== 0
      )
        result = { a: 1, b: 4, c: 7, mark: this1[1].data };
      if (
        this1[2].data === this1[5].data &&
        this1[5].data === this1[8].data &&
        this1[2].data !== 0
      )
        result = { a: 2, b: 5, c: 8, mark: this1[2].data };
      if (
        this1[0].data === this1[4].data &&
        this1[4].data === this1[8].data &&
        this1[0].data !== 0
      )
        result = { a: 0, b: 4, c: 8, mark: this1[0].data };
      if (
        this1[2].data === this1[4].data &&
        this1[4].data === this1[6].data &&
        this1[2].data !== 0
      )
        result = { a: 2, b: 4, c: 6, mark: this1[2].data };
      this.setState({ result: result.mark });
      if (result.mark !== 0) this.winnerdeclare(result);
      if (this.state.play >= "9" && this.state.type === "twoplayer") {
        let data = this.state;
        Dbcon.transdata(data);
      }
    }
  }
  winnerdeclare(result) {
    let data = this.state;
    Dbcon.transdata(data);
  }
  squaredisp() {
    return this.state.arr.map((slide, index) => {
      return (
        <Square
          key={index}
          key1={index}
          arr={this.state.arr}
          userinput={this.userinput}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <section className="u-clearfix u-section-3" id="sec-8d63">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-align-center u-container-style u-custom-color-1 u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1"
                  src=""
                >
                  <div className="u-container-layout u-container-layout-1">
                    <h1 className="u-text u-title u-text-1">Train Machine</h1>
                    <h1 className="u-text u-text-custom-color-2 u-text-2">
                      {this.state.completed}
                    </h1>
                    <div className="u-border-3 u-border-custom-color-2 u-line u-line-horizontal u-line-1"></div>
                    <h2 className="u-text u-text-custom-color-2 u-text-3">
                      362880
                    </h2>
                    <Link
                      onClick={this.recur}
                      className="u-border-2 u-border-custom-color-2 u-border-hover-custom-color-1 u-btn u-btn-round u-button-style u-hover-custom-color-2 u-none u-radius-50 u-text-custom-color-2 u-text-hover-custom-color-1 u-btn-1"
                    >
                      Start
                    </Link>
                    <a
                      href="#"
                      className="u-border-2 u-border-custom-color-2 u-border-hover-custom-color-1 u-btn u-btn-round u-button-style u-hover-custom-color-2 u-none u-radius-50 u-text-custom-color-2 u-text-hover-custom-color-1 u-btn-2"
                    >
                      Reset
                    </a>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-custom-color-2 u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gallery u-layout-grid u-show-text-on-hover u-gallery-1">
                      <div className="u-gallery-inner u-gallery-inner-1">
                        {this.squaredisp()}
                      </div>
                    </div>
                    <img
                      src={board}
                      alt=""
                      className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-1"
                      data-image-width="666"
                      data-image-height="666"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Train;
