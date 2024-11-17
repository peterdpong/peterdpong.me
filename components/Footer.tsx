import { styled } from "@/stitches.config";

export const Footer = () => {
  return (
    <FooterDiv>
      <Wrapper>
        <FooterContainer>
          <FooterText>NYC + Toronto</FooterText>
          <FooterText>{new Date().getUTCFullYear()}</FooterText>
        </FooterContainer>
      </Wrapper>
    </FooterDiv>
  );
};

const FooterDiv = styled("div", {
  width: "100%",
  height: "2.5rem",
  backgroundSize: "8px 1px",
  backgroundRepeat: "repeat-x",
  backgroundImage:
    "linear-gradient(to right, #303030 50%, hsla(0, 0%, 100%, 0) 0);",
  paddingTop: "4px",
  position: "absolute",
  bottom: 0,
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px 0.5rem",
});

const FooterText = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  color: "#1E1E1E",
  margin: "8px 0px",
});

const Wrapper = styled("div", {
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",
});
