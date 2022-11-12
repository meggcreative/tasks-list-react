import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const AuthorPage = () => {
  return (
    <Container>
      <Header title="Strona o Autorze" />
      <Section
        title="Magdalena Żulewska"
        sectionContent={<>Napisać coś o Magdalenie :D</>}
      />
    </Container>
  );
};

export default AuthorPage;
