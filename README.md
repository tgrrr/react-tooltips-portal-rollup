# React Tooltips

## Features

- [x] React
- [x] React Portals - rendered outside the DOM hierarchy of parent component
- [x] Rollup as module bundle
- [x] Hot reload
- [x] No boilerplate dependencies
- [x] JS Syntax: ES6 with Babel + rollup plugins
- [x] CSS: PostCSS + CSS Module + classnames + sass/scss
- [x] eslint

### Hooks

- [x] `useHover()` - detect if component is hovered over

- [x] `useResize()` - is the window resized?
- [x] `useCoords()` - position detection of an element (uses ref)
- [x] `useScroll()` - scroll detection
- [x] `useHasMouse()` - Does the device have a mouse? (*This is very basic, lightweight functionality. For a more accurate package, see [detect it]*)
- [x] `useEventListener()` - simplified events

## Roadmap
#### Mobile and Tablet:

- [ ] On a client without a mouse, the tooltip should be activated on tap only
- [ ] Deactivated by tapping outside of the tooltip

#### Desktop:

- [x] Hover: On a client with a mouse, the tooltip is activated onMouseOver and deactivated onMouseLeave 

#### All devices

- [ ] Re-usable: a tooltip can be attached to anything
- [ ] Animations and transitions when the tooltip appears and disappear
- [x] Deactivate on scroll
- [x] Deactivate on resize (for all devices. This covers rotating a tablet/mobile without a mouse)

### Next Up

- [ ] Smart tail: Boundary detection, e.g. if the tooltip is displayed on left, the tail should correspond to it
- [ ] Auto detect and place tooltip based on fit. E.g. if there is not enough space at the top of the page, tooltip should appear below the content.
- [ ] `usePortal()` - Reusable react portal custom hook

### Later

- [ ] Minimum browser support, IE11+, iOS 10+
- [ ] Accessibility
- [ ] Tests with BDD and TDD (*yes, this should have come first. However, it was outside of the spec*)
- [ ] Yarn Workspaces to separate Demo and NPM Package
- [ ] [Automate parent creation of node]
- [ ] Hooks refactored to separate packages
- [ ] Tooltip comparison
- [ ] Test if splitting Tooltip into a Desktop and TouchScreen component renders more efficiently
? combine resize and coordinates into single hook

## Getting Started

```zsh
$ git clone git+https://github.com/tgrrr/tooltips.git
$ cd tooltips
$ yarn
```

React is included as `peerDependency`, so if your project doesn't include React, you may need to add it as a CDN

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

### Demo

```zsh
$ yarn run demo
```

port: `8080`

## Local Development

```zsh
$ yarn watch
```

<!-- CHECKME: -->
port: `8080`

### Release to NPM

```zsh
$ yarn build

> yarn run v1.22.10
> $ rollup -c

> src/index.js → dist/bundle.js...
> created dist/bundle.js in 556ms
> ✨  Done in 1.04s.
```

```zsh
$ npm publish 
```


## Stats

### Bundle size

-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    0 Byte
original size:  82 Bytes
code reduction: 100 %
module count:   1

## Reference

[Compare other npm tooltip packages]

[Compare other npm tooltip packages]: https://www.npmtrends.com/react-hint-vs-react-tooltip-component-vs-react-tooltip-lite-vs-react-lightweight-tooltip-vs-simple-react-tooltip-vs-react-portal-tooltip
[detect it]: https://github.com/rafgraph/detect-it
[Automate parent creation of node]: https://www.jayfreestone.com/writing/react-portals-with-hooks/
