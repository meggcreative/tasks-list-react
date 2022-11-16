import {
  StyledNavigation,
  StyledNavigationItem as StyledItem,
  StyledNavigationList as StyledList,
} from "./styled";
const Navigation = ({ bodyNavigationList, bodyNavigationList1 }) => {
  return (
    <StyledNavigation>
      <StyledList>
        <StyledItem>{bodyNavigationList}</StyledItem>
        <StyledItem>{bodyNavigationList1}</StyledItem>
      </StyledList>
    </StyledNavigation>
  );
};

export default Navigation;
