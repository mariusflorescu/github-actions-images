import { styled } from "../../stitches.config";

const StyledLink = styled("a", {
  all: "unset",
  position: "relative",
  cursor: "pointer",

  "&:before": {
    content: "",
    position: "absolute",
    bottom: "-4px",
    backgroundColor: "$indigo",
    width: 0,
    height: "4px",
    "@motionSafe": {
      transition: "width 200ms ease",
    },
  },

  "@hover": {
    "&:hover": {
      "&:before": {
        width: "100%",
      },
    },
  },
});

const StyledImage = styled("img", {
  width: 200,
  height: 128,
});

export { StyledLink, StyledImage };
