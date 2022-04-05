import Blank from "../../../../commons/Blank";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserPoint.Style";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { UserPageNav } from "../../../../commons/Mypage/MypageNav";
import { IUserPointUI } from "../../../../../commons/types/types";
import Script from "next/script";

export default function UserPointUI(props: IUserPointUI) {
  return (
    <div>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.AllWrapper>
        <S.Web>
          <MypageMenu />
        </S.Web>
        <S.Wrapper>
          {props.isModal && (
            <Modal
              visible={true}
              onOk={props.onClickOkBtn}
              onCancel={props.onClickModal}
              okText="충전하기"
              cancelText="취소하기"
              style={{ textAlign: "center", width: "100%" }}
            >
              <h1>CU2 포인트 충전</h1>
              <select
                onChange={props.onChangeAmount}
                style={{ width: "80%", textAlign: "center", fontSize: "18px" }}
              >
                <option selected disabled>
                  CU Point 충전 금액을 선택해주세요.
                </option>
                <option defaultValue="5000">5,000 포인트</option>
                <option value="10000">10,000 포인트</option>
                <option value="20000">20,000 포인트</option>
                <option value="30000">30,000 포인트</option>
              </select>
            </Modal>
          )}
          <UserPageNav menu={"포인트 충전내역"} />
          <Blank height="30px" />
          <S.ChargeBox>
            <S.Row>
              <S.ColumnHeaderBasic>결제 상태</S.ColumnHeaderBasic>
              <S.ColumnHeaderTitle>결제ID</S.ColumnHeaderTitle>
              <S.ColumnHeaderBasic>충전 금액</S.ColumnHeaderBasic>
            </S.Row>
            {props.pointData?.fetchMyPointHistory.map((el) => (
              <S.Row key={el.id}>
                <S.ColumnBasic>{el.status}</S.ColumnBasic>
                <S.ColumnTitle>{el.impUid}</S.ColumnTitle>
                <S.ColumnBasic>{el.amount}</S.ColumnBasic>
              </S.Row>
            ))}
          </S.ChargeBox>
          <Blank height="30px" />
          <S.Box>
            <button onClick={props.onClickOkBtn}>충전하기</button>
          </S.Box>
        </S.Wrapper>
      </S.AllWrapper>
    </div>
  );
}
