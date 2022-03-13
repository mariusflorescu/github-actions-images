import { useTheme } from "next-themes";
import { styled } from "../stitches.config";
import Button from "../components/Button";
import LinkPreview from "../components/LinkPreview";

const Home = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <Wrapper>
      <FlexCenter>
        <LinkPreview
          link="https://github.com/mariusflorescu"
          imageURL={`/screenshots/twitter/${theme}.webp`}
        >
          <StyledSpan>Hover over</StyledSpan>
        </LinkPreview>
      </FlexCenter>
      <FlexCenter>
        <Button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          Click to change theme
        </Button>
        <span>Current theme is {theme}</span>
      </FlexCenter>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

const FlexCenter = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$2",
});

const StyledSpan = styled("span", {
  textAlign: "center",
  fontSize: "$6",
  fontWeight: "$medium",
});

export default Home;
