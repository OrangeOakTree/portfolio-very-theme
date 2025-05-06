/**
 * Copyright 2025 OrangeOakTree
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import './portfolio-banner.js';
/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.pages = [];
    this.bannertitle = "Page Title";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
      bannertitle: { type: String }
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
      #bannertitle {
        display: flex;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 28px;
        padding: 4px;
        font-size: 24px;
        background-color: var(--ddd-theme-default-black);
        background-image: url(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cape_may.jpg/500px-Cape_may.jpg");
            background-repeat: no-repeat;
            background-position: center;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
      }
      
      
      .navcontent {
        display: flex;
        padding: 4px;
        margin: auto;
        margin-left: 28px;
        flex-direction: row;
        justify-content: space-between;
        align-items: right;
        a {
          color: var(--ddd-theme-default-white);
        }
        @media screen and (min-width: 600px) {
          #bannertitle {
            font-size: 36px;
          }
          .navcontent {
            margin-left: 16px;
            font-size: 16px;
          }

        }
        @media screen and (min-width: 928px) {
          #bannertitle {
            font-size: 48px;
          }
          .navcontent {
            margin-left: 16px;
            font-size: 16px;
          }
        }
      }
      
      scroll-button {
        position: fixed;
        bottom: var(--ddd-spacing-5);
        right: var(--ddd-spacing-5);
      
      }
      
    `];
  }
  

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <portfolio-banner>
        <h1 id="bannertitle">${this.bannertitle}</h1>
      <ul class="navcontent">
        ${this.pages.map((page, index) => html`<a href="#${page.number}" @click="${this.linkchange}" data-index="${index}">${page.title}</a>`)}
      </ul>
      </portfolio-banner>
      <div class="pagewrapper" @page-added="${this.addpage}">
        <slot></slot>
        <scroll-button></scroll-button>
      </div>
    </div>`;
  }

  linkchange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addpage(e) {
    const element = e.detail.value
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    }
    this.pages = [...this.pages, page];
  }
  
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);