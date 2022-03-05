import { styled } from "../../stitches.config";

const Button = styled("button", {
  padding: "$2 $3",
  backgroundColor: "$text",
  color: "$background",
  border: 0,
  borderRadius: "$3",
  cursor: "pointer",
  transition: "transform 250ms cubic-bezier(.2,.8,.4,1)",

  "&:hover": {
    transform: "scale(1.05)",
  },

  "&:active": {
    transform: "scale(0.95)",
  },
});

export { Button };
