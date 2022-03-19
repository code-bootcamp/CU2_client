import { useRouter } from "next/router";
import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import * as S from "./style";

interface ICodingUsLeftSideBarProps {
  interestStacks: string[];
}

export default function CodingUsLeftSidebar(props: ICodingUsLeftSideBarProps) {
  //   const { moveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <S.Wrapper>
      <Label01 value="관심 스택" size="24px" weight="700"/>
      <S.StackWrapper>
        {props.interestStacks.map((el, idx) => (
          <div key={idx}>
            <Blank height="40px" />
            <S.StackLabel
              onClick={() => {
                router.push(`/codingus/stack/${el}`);
                // moveToPage(`/codingus/stack/${el}`)
              }}
            >
              {el}
            </S.StackLabel>
          </div>
        ))}
        <Blank height="40px" />
        <S.StackLabel
          onClick={() => {
            router.push("/codingus/stack/editMyStack");
            // moveToPage(`/codingus/stack/${el}`)
          }}
        >
          관심 스택 추가하기
        </S.StackLabel>
      </S.StackWrapper>
    </S.Wrapper>
  );
}
