import {
  StyledNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from "./styled";
const Navigation = (props) => {
  return (
    <StyledNavigation>
      <StyledNavigationList>
        <StyledNavigationItem>{props.bodyNavigationList}</StyledNavigationItem>
        <StyledNavigationItem>{props.bodyNavigationList1}</StyledNavigationItem>
      </StyledNavigationList>
    </StyledNavigation>
  );
};

export default Navigation;
