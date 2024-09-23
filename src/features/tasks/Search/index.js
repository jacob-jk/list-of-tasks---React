import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Input } from "../Form/styled";
import { Wrapper } from "./styled";

export const searchQueryParamName = "szukaj";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const history = useHistory();

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
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
