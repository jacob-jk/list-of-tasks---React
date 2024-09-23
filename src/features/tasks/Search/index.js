import { Input } from "../Form/styled";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParams";

export const searchQueryParamName = "szukaj";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
        name="search"
      />
    </Wrapper>
  );
};

export default Search;
