import { Modal } from "antd";
import "antd/dist/antd.css";
import { IMyPageUIProps } from "../../../../commons/types/types";
import MypageMenu from "./MypageMenu.Container";

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <>
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
            <option value="5000">5000 포인트</option>
            <option value="10000">10,000 포인트</option>
            <option value="20000">20,000 포인트</option>
            <option value="30000">30,000 포인트</option>
          </select>
        </Modal>
      )}{" "}
      <MypageMenu />
    </>
  );
}
