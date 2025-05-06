/**
 * Copyright 2025 OrangeOakTree
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import {DDD} from "@haxtheweb/d-d-d/d-d-d.js";
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
    this.title = "NO TITLE";
    this.pagenumber=null;
    this.backimg = "";
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
   
      return [super.styles,
        css`
      :host {
        display: block;
        height: 100vh;
        width: 100vw;
        position: static;
      }
      .wrapper {
        margin: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--ddd-theme-accent);
      }
      #pagetitle {
        padding-top: 112px;
        margin-left: 32px;
        margin-bottom: 12px;
        margin-top: 0;
        color: var(--ddd-theme-primary);
      }
      #pagecontent {
        margin-left: 32px;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        position: static;
      }
    `];
  
    
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
    <h1 id="pagetitle"> ${this.title} </h1>
      <div id="pagecontent">
        <slot></slot>
      </div>
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