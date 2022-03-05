import HoverCardPrimitive from "@radix-ui/react-hover-card";
import { styled, keyframes } from "stitches.config";

const slideUp = keyframes({
  "0%": { transform: "scaleY(0)" },
  "100%": { transform: "scaleY(1)" },
});

const reverseSlide = keyframes({
  0: { transform: "scaleY(1)" },
  "100%": { transform: "scaleY(0)" },
});

const Content = styled(HoverCardPrimitive.Content, {
  backgroundColor: "$black",
  padding: "$2",
  borderRadius: "$2",

  "@motionSafe": {
    animationDuration: "200ms",
    animationTimingFunction: "ease",
    willChange: "transform",
    transformOrigin: "bottom",
    '&[data-state="open"]': {
      animationName: slideUp,
    },
    '&[data-state="closed"]': {
      animationName: reverseSlide,
    },
  },
});

const HoverCardRoot = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = Content;

export { HoverCardRoot, HoverCardTrigger, HoverCardContent, reverseSlide };
