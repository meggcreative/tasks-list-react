import Input from "../../Input";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import searchQueryParamName from "../searchQueryParamName";
import useQueryParamater from "../../useQueryParameter";
import { Wrapper } from "./styled";

const Search = () => {
  const query = useQueryParamater(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value:
        event.target.value.trim() !== undefined
          ? event.target.value
          : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
