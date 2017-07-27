# CSS Grid

A CSS Grid for a basic site with flex fallback.

## Usage
Install packages and build project:

`$ npm install`

## Files

- `_grid.scss`: the css grid
- `_flex-fallback.scss`: the fallback grid made with flex

## Support
- IE 10 / 11: flex fallback
- Edge: flex fallback (grid support will be added)
- All current desktop browsers: css grid
- Mobile Browsers: flex / css grid

## Differentiate between grid support
```css
// A
// load flex if browser is IE
// ignores: B, C
// because: @supports not supported
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  @import 'flex-fallback';
}

// B
// load flex if browser can't handle grid
// ignores: A, C
// because: @support is supported, grid is not supported
@supports not (grid-template-areas:"support"){
  @import 'flex-fallback';
}

// C
// load grid if browser supports it
// ignores: A, B
// because: @support is supported, grid is supported
@supports (grid-template-areas:"support") {
  @import 'grid';
}
```

The reason for Import `A` is that `@supports` is not supported in IE.