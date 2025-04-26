/**
 * Copyright 2025 OrangeOakTree
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import {DDD} from "@haxtheweb/d-d-d/d-d-d.js";
import '@haxtheweb/scroll-button/scroll-button.js';
/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDD  {

  static get tag() {
    return "portfolio-screen";
  }

  constructor() {
    super();
    this.title = "NO TITLE"
    this.pagenumber=null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    :host {
      display: block;
      height: 100vh;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
    <h1> ${this.title} </h1>
      <slot></slot>
    </div>
    
    `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }

  
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);