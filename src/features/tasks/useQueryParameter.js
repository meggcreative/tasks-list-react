import { useLocation } from "react-router-dom";

const useQueryParamater = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(props);

  return query;
};

export default useQueryParamater;
