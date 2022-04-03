import Blank from "../../../../commons/Blank";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserPoint.Style";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { MyPageButton } from "../../../../commons/Mypage/MypageButton";
import { UserPageNav } from "../../../../commons/Mypage/MypageNav";
import { IUserPointUI } from "../../../../../commons/types/types";

export default function UserPointUI(props: IUserPointUI) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        {props.isModal && (
          <Modal
            visible={true}
            // onOk={}
            onCancel={props.onClickModal}
            okText="충전하기"
            cancelText="취소하기"
            style={{ textAlign: "center", width: "100%" }}
          >
            <h1>CU2 포인트 충전</h1>
            <select
              // onChange={}
              style={{ width: "80%", textAlign: "center", fontSize: "18px" }}
            >
              <option selected disabled>
                CU Point 충전 금액을 선택해주세요.
              </option>
              <option value="5000">5,000 포인트</option>
              <option value="10000">10,000 포인트</option>
              <option value="20000">20,000 포인트</option>
              <option value="30000">30,000 포인트</option>
            </select>
          </Modal>
        )}
        <UserPageNav menu={"포인트 충전내역"} />

        <Blank height="30px" />

        <S.ChargeBox>
          <span>전체내역</span> | <span>충전내역</span> | <span>구매내역</span>{" "}
          | <span>판매내역</span>
          <S.Row>
            <S.ColumnHeaderBasic>충전일</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>결제ID</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>충전/구매 내역</S.ColumnHeaderBasic>
            <S.ColumnHeaderBasic>충전 후 잔액</S.ColumnHeaderBasic>
          </S.Row>
          <S.Row>
            <S.ColumnBasic>충전일 내용</S.ColumnBasic>
            <S.ColumnTitle>결제ID 내용</S.ColumnTitle>
            <S.ColumnBasic>충전 내역 내용</S.ColumnBasic>
            <S.ColumnBasic>충전 후 잔액 내용</S.ColumnBasic>
          </S.Row>
        </S.ChargeBox>
        <Blank height="30px" />
        <S.Box>
          <MyPageButton onClick={props.onClickModal} value={"충전하기"} />
        </S.Box>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
