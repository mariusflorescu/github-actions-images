import { styled } from "../stitches.config";
import LinkPreview from "../components/LinkPreview";

const StyledSpan = styled("span", {
  fontSize: "$5",
  fontWeight: "$medium",
});

const Home = () => {
  return (
    <div>
      <LinkPreview
        link="https://github.com/mariusflorescu"
        imageURL="/screenshots/twitter/dark.webp"
      >
        <StyledSpan>Hover over!</StyledSpan>
      </LinkPreview>
    </div>
  );
};

export default Home;
