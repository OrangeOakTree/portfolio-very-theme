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
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array }
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
      portfolio-banner {
        
      }
    `];
  }
  

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <portfolio-banner>
      <ul>
        ${this.pages.map((page, index) => html`<a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">${page.title}</a>`)}
      </ul>
      </portfolio-banner>
      <div class="pagewrapper" @page-added="${this.addpage}">
        <slot></slot>
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