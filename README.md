# React & Web Components Playground

## TODO

20mins

Server side rendering?

https://developers.google.com/web/fundamentals/web-components/best-practices

Web Components

- integrate nicely into dev tools (good for developers)
- are native, so don't need a big library
- that makes them easy to integrate into any frontend project
- e.g. share stuff between your React, Elm, Angular projects

## Plot

### React & Web Components don't work together?

- React and Web Components are different systems.
- They don't work together.
- It's either or.

### No, they are complementary and work together.

> React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.
>
> <cite>&mdash; https://reactjs.org/docs/web-components.html</cite>

That said support for Custom Elements in React is a bit clunky. See [Custom Elements Everywhere](https://custom-elements-everywhere.com/#react) for a list of open issues.

### Better support is being considered for React 17

- RFC: https://github.com/reactjs/rfcs/pull/15

  - Proposes to set properties by default, instead of attributes.

  - Add new API for more options:

    ```js
    ReactDOM.createCustomElementType(tagName[, configuration])
    ```

- GitHub issue: https://github.com/facebook/react/issues/11347

- React Fire: https://github.com/facebook/react/issues/13525

  - Maybe get rid of synthetic events. This could mean native DOM events of Custom Elements just work™.
