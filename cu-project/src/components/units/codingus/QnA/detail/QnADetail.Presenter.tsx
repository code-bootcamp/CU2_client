import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag01 from "../../../../commons/Tag/Tag01";
import Tag02 from "../../../../commons/Tag/Tag02";
import QnADetailCard from "../../card/qnaDetailCard/QnADetailCard";
import * as S from "./QnADetail.Style";
import { v4 as uuidv4 } from "uuid";
interface ICodingUsQnaDetailUIProps {
  question: {
    writer: string;
    createdAt: string;
    title: string;
    contents: string;
    stack: string;
    tags: string[];
  };
  answer?: {question: {
    writer: string;
    createdAt: string;
    title: string;
    contents: string;
    stack: string;
    tags: string[];
  }[];
}
}

export default function CodingUsQnADetailUI(props: ICodingUsQnaDetailUIProps) {
  return (
    <S.QnADetail>
      <Label01 value="Stack" size="36px" weight="700"></Label01>
      <Blank height="28px" />
      <S.Tags>
        <Tag01 value={props.question.stack} isShort={true} />
        <Blank width="20px" />
        {props.question.tags &&
          props.question.tags.map((el) => (
            <S.RowWrapper key={uuidv4()}>
              <Tag02 value={el} size="24px" />
              <Blank width="10px" />
            </S.RowWrapper>
          ))}
      </S.Tags>
      <Blank height="21px" />
      <QnADetailCard
        isQuestion={false}
        writer={props.question.writer}
        title={props.question.title}
        contents={props.question.contents}
        createdAt={props.question.createdAt}
      />
    </S.QnADetail>
  );
}
