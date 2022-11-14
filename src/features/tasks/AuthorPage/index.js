import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const AuthorPage = () => {
  return (
    <Container>
      <Header title="Strona o Autorze" />
      <Section
        title="Magdalena Żulewska"
        sectionContent={
          <>
            <strong>Kim jestem i co robię ?</strong> <br />W swojej ponad 31
            letniej karierze nie było pracy, której się bałam. Rozdawałam
            ulotki, sprzątałam, zbierałam truskawki, byłam hostessą, kelnerką
            etc. W końcu moja pierwsza poważna praca biurowa to stanowisko
            księgowej w przedsiębiorstwie moich rodziców. Ze stopnia finansów
            zaczęłam się wdrażać w kolejne poziomy i od serwisanta aut
            ciężarowych ( i nie mam na myśli tutaj mechanicznej obsługi, a
            raczej kwestie bookowania terminów w serwisach i
            odwożenie/przywożenie auta uzgodnionego terminu, załatwianie części
            samochodowych, rejestracje i pilnowanie przeglądów), aż po
            stanowisko spedytora, którym jestem do chwili obecnej. Dodatkowo po
            godzinach pracy zajmuję się również salonem fryzjersko-kosmetycznym
            gdzie jestem odpowiedzialna za finanse, zamówienia, inwentaryzacje
            oraz zarządzanie kadrą pracowniczą. 😆
            <br />Z nowości, które zawitały w tym 2022 roku to{" "}
            <strong>zostałam mamą</strong> i mogę z dumą powiedzieć, że mój
            7-miesięczny <strong>synek to największy skarb świata </strong>😍{" "}
          </>
        }
      />
    </Container>
  );
};

export default AuthorPage;
