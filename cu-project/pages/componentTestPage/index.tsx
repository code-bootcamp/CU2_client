import CodingUsHistory from "../../src/components/units/codingus/history/History.Container";
export default function ComponentTestPage() {
  return (
    <div>
      <CodingUsHistory
        historyData={{
          작성글: 10,
          GOOD: 24,
          BAD: 2,
          채택: 0,
          댓글: 13,
        }}
        title="MyHistory"
      />
    </div>
  );
}
