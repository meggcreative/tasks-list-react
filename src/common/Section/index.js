import { StyledSection, StyledHeader, Tittle, Content } from "./styled.js";

const Section = (props) => (
  <StyledSection>
    <StyledHeader>
      <Tittle>{props.title}</Tittle>
      {props.extraHeaderContent}
    </StyledHeader>
    <Content>{props.sectionContent}</Content>
  </StyledSection>
);

export default Section;
