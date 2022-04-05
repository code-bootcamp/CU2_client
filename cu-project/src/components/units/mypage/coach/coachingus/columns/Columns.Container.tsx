import { useQuery } from "@apollo/client";
import ColumnsUI from "./Columns.Presenter";
import { FETCH_MY_COLUMN } from "./Columns.Queries";

export default function Columns() {
  const { data } = useQuery(FETCH_MY_COLUMN);
  return <ColumnsUI data={data} />;
}
