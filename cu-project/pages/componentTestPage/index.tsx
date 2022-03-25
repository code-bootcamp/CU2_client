import QnADetailCard from "../../src/components/units/codingus/card/qnaDetailCard/QnADetailCard";

export default function ComponentTestPage() {
  return (
    <div style={{marginTop:"200px"}}>
      <QnADetailCard title={"자바스트립트가 뭔가요?"} writer="작성자" contents="자바스크립트가 궁금해요!" createdAt="2022-02-07T14:42:53.532Z" isGood={true}/>
    </div>
  );
}
