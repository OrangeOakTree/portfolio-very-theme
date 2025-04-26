/**
 * Copyright 2025 OrangeOakTree
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import {DDD} from "@haxtheweb/d-d-d/d-d-d.js";
/**
 * `portfolio-banner`
 * 
 * @demo index.html
 * @element portfolio-banner
 */
export class PortfolioBanner extends DDD  {

  static get tag() {
    return "portfolio-banner";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
            display: block;
            height: 100px;
            position: fixed;
            width: 100%;
            margin: 0;
      }
      #wrapper {
        background-color: white;  
        display: flex;
        margin: auto;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div id="wrapper">
        <slot></slot>
    </div>
    `;
  }
}

globalThis.customElements.define(PortfolioBanner.tag, PortfolioBanner);