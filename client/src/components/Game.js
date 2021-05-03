import React, { Component } from 'react'
import board from './assets/img/board.svg';
import circle from './assets/img/circle.svg';
import cross from './assets/img/cross.svg';
import './assets/game.css'
export class Game extends Component {
    render() {
        return (
            <div>
                <section class="u-align-center u-clearfix u-custom-color-2 u-section-1" id="sec-2678">
      <div class="u-clearfix u-sheet u-sheet-1">
        <a href="https://nicepage.com/k/aesthetic-html-templates" class="u-border-3 u-border-active-palette-2-dark-1 u-border-custom-color-2 u-border-hover-custom-color-1 u-btn u-button-style u-none u-text-custom-color-1 u-text-hover-custom-color-1 u-btn-1">BACK</a>
        <img src={board} alt="" class="u-expanded-width-md u-expanded-width-xs u-image u-image-default u-image-1" data-image-width="666" data-image-height="666"/>
        <div class="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1">
          <div class="u-gallery-inner u-gallery-inner-1">
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="625" data-image-height="625">
                <img class="u-back-image u-expanded" src={cross}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-1">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="685" data-image-height="685">
                <img class="u-back-image u-expanded" src={circle}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-2">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="685" data-image-height="685">
                <img class="u-back-image u-expanded" src={circle}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-3">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="685" data-image-height="685">
                <img class="u-back-image u-expanded" src={circle}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-4">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="625" data-image-height="625">
                <img class="u-back-image u-expanded" src={cross}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-5">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item u-gallery-item-6" data-image-width="1280" data-image-height="720">
              <div class="u-back-slide" data-image-width="625" data-image-height="625">
                <img class="u-back-image u-expanded u-back-image-6" src={cross}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-6">
                <h3 class="u-gallery-heading" style={{backgroundimage: "none"}}></h3>
                <p class="u-gallery-text" style={{backgroundimage: 'none'}}></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item u-gallery-item-7" data-image-width="1280" data-image-height="720">
              <div class="u-back-slide" data-image-width="685" data-image-height="685">
                <img class="u-back-image u-expanded u-back-image-7" src={circle}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-7">
                <h3 class="u-gallery-heading" style={{backgroundimage: 'none'}}></h3>
                <p class="u-gallery-text" style={{backgroundimage: 'none'}}></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item u-gallery-item-8" data-image-width="1280" data-image-height="720">
              <div class="u-back-slide" data-image-width="685" data-image-height="685">
                <img class="u-back-image u-expanded u-back-image-8" src={circle}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-8">
                <h3 class="u-gallery-heading" style={{backgroundimage: 'none'}}></h3>
                <p class="u-gallery-text" style={{backgroundimage: 'none'}}></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item u-gallery-item-9" data-image-width="1280" data-image-height="720">
              <div class="u-back-slide" data-image-width="625" data-image-height="625">
                <img class="u-back-image u-expanded u-back-image-9" src={cross}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-9">
                <h3 class="u-gallery-heading" style={{backgroundimage: 'none'}}></h3>
                <p class="u-gallery-text" style={{backgroundimage: 'none'}}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
        )
    }
}

export default Game
