# React & Web Components Playground

## TODO

20mins

Server side rendering?

https://developers.google.com/web/fundamentals/web-components/best-practices

What are Web Components?

- Custom Elements
- Shadow DOM
- Template Element

Web Components...

- integrate nicely into dev tools (good for developers)
- are native, so don't need a big library
- that makes them easy to integrate into any frontend project
- e.g. share stuff between your React, Elm, Angular projects

Web Components are used

- GitHub
- [ING](https://dev.to/thepassle/ing--web-components-aef)
- Chrome settings/about
- YouTube uses v0 and now every browser needs polyfill 😞
- https://github.com/Polymer/polymer/wiki/Who%27s-using-Polymer%3F

## Plot

### Web Components?

6min

### React vs. Web Components?

4min

- WCs are hard to work with
- WCs can't do what React does
- React is a huge library
- React needs tooling (babel)

### React 🤝 Web Components.

8min

> React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.
>
> <cite>&mdash; https://reactjs.org/docs/web-components.html</cite>

That said support for Custom Elements in React is a bit clunky. See [Custom Elements Everywhere](https://custom-elements-everywhere.com/#react) for a list of open issues.

### React ❤ Web Components!

2min

- RFC: https://github.com/reactjs/rfcs/pull/15

  - Proposes to set properties by default, instead of attributes.

  - Add new API for more options:

    ```js
    ReactDOM.createCustomElementType(tagName[, configuration])
    ```

- GitHub issue: https://github.com/facebook/react/issues/11347

- React Fire: https://github.com/facebook/react/issues/13525

  - Maybe get rid of synthetic events. This could mean native DOM events of Custom Elements just work™.

### More resources and stuff coming up

- React 17 with better Custom Element support?
- https://css-tricks.com/a-guide-to-custom-elements-for-react-developers/
- https://www.smashingmagazine.com/2018/07/reusable-components-custom-elements-shadow-dom-npm/
- Constructable Stylesheets, adoptedStyleSheets
  - https://developers.google.com/web/updates/2019/02/constructable-stylesheets
  - https://wicg.github.io/construct-stylesheets/
- https://custom-elements-everywhere.com/
- https://caniuse.com/#feat=custom-elementsv1
- https://github.com/webcomponents/webcomponentsjs
- lit-html, hyperHTML, ...
- https://github.com/frigus02/function-web-components
- https://github.com/github/details-dialog-element
- https://github.com/w3c/webcomponents/issues/716
- https://github.com/web-padawan/aybolit

https://twitter.com/vincentriemer/status/1022447091455598593
https://medium.com/@bdc/web-components-the-react-way-8ed5b6f4f942
https://vaadin.com/tutorials/using-web-components-in-react
https://dev.to/ben/why-the-react-community-is-missing-the-point-about-web-components-1ic3

https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m

https://css-tricks.com/an-introduction-to-web-components/
