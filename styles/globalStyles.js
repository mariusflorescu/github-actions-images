import { globalCss } from "../stitches.config";

export const global = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  "*": {
    margin: 0,
  },

  "html, body": {
    height: "100%",
  },

  body: {
    lineHeight: 1.5,
    backgroundColor: "$background",
    color: "$text",
    fontFamily: "$openSans",
    backgroundImage:
      "radial-gradient(circle 1200px at 50% 200%, $colors$indigo, $colors$transparent)",
    "-webkit-font-smoothing": "antialiased",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "input, button, textarea, select": {
    font: "inherit",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  "#root, #__next": {
    height: "100%",
    isolation: "isolate",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  /* selection */
  // '::selection':{
  //     backgroundColor: 'hsl(358, 100%, 50%)', //change color
  //     color: '$white'
  // }
});
