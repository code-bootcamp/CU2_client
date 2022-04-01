import SearchBarUI from "./SearchBar.Presenter";

export default function SearchBar(props) {
  return <SearchBarUI setIsSearch={props.setIsSearch} />;
}
