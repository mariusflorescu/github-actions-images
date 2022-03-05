import { useTheme } from "next-themes";
import { styled } from "../stitches.config";
import Button from "../components/Button";
import LinkPreview from "../components/LinkPreview";

const Home = () => {
  const { theme, setTheme } = useTheme();

  /*
   * IMPORTANT !
   * The following 2 functions are due to the fact that
   * next-themes has some sort of bug and sets the theme wrongly in localStorage
   */
  const persistLocalStorageTheme = (decidedTheme) => {
    localStorage.setItem("theme", decidedTheme);
  };

  const handleThemeChange = () => {
    const decidedTheme = theme === "light" ? "dark" : "light";

    setTheme(() => decidedTheme);
    persistLocalStorageTheme(decidedTheme);
  };
  /*
   *
   */

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
        <Button onClick={() => handleThemeChange()}>
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
