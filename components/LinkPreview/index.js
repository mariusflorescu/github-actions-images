import Head from "next/head";
import { styled } from "../../stitches.config";
import {
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardContent,
} from "../HoverCard";
import { StyledLink, StyledImage } from "./styles";

const LinkPreview = ({ children, link, imageURL }) => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={imageURL} />
      </Head>
      <HoverCardRoot openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <StyledLink href={link} target="_blank">
            {children}
          </StyledLink>
        </HoverCardTrigger>
        <HoverCardContent side="top" sideOffset={6}>
          <StyledImage src={imageURL} />
        </HoverCardContent>
      </HoverCardRoot>
    </>
  );
};

export default LinkPreview;
