import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Home extends Component {
  onclick() {}
  render() {
    return (
      <div>
        <section className="u-clearfix u-section-1" id="sec-806d">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-center u-container-style u-custom-color-1 u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h1 className="u-text u-title u-text-1">two Pl​ayer</h1>
                    <p className="u-text u-text-custom-color-2 u-text-2">
                      Play with friend and train machine
                    </p>
                    <Link
                      to="/game/twoplayer" 
                      className="u-border-2 u-border-custom-color-2 u-border-hover-custom-color-1 u-btn u-btn-round u-button-style u-hover-custom-color-2 u-none u-radius-50 u-text-custom-color-2 u-text-hover-custom-color-1 u-btn-1"
                    >
                      PLAY
                    </Link>
                  </div>
                </div>
                <div className="u-container-style u-custom-color-2 u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <h1 className="u-align-center u-text u-text-custom-color-1 u-title u-text-3">
                      Single Player
                    </h1>
                    <p className="u-align-center u-text u-text-custom-color-1 u-text-4">
                      Machine play with you
                    </p>
                    <Link
                      to="/game/singleplayer"
                      className="u-border-2 u-border-custom-color-1 u-border-hover-custom-color-1 u-btn u-btn-round u-button-style u-hover-custom-color-1 u-none u-radius-50 u-text-custom-color-1 u-text-hover-custom-color-2 u-btn-2"
                    >
                      PLAY
                    </Link>
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

export default Home;
