import { useRouter } from "next/router";
import Search from "../../src/components/units/commons/search/Search.Container";

export default function SearchPage() {
  const router = useRouter();
  return <Search query={router.query} />;
}
