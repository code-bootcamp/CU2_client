import MypageMenu from "../../MypageMenu.Container";
import * as S from "./Likeposts.Style";
import { v4 as uuidV4 } from "uuid";
import { IUserLikePostsUIProps } from "../../../../../../commons/types/types";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
// import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import { Col, Row } from "react-bootstrap";
import BlogCard01 from "../../../../../commons/Card/BlogCard01/BlogCard01";
import Blank from "../../../../../commons/Blank";

export default function UserLikePostsUI(props: IUserLikePostsUIProps) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"Good한 포스트"} />

        <S.BlogHeader>
          <h2>전체글 {props.data?.fetchBloglike.length}개</h2>
          {/* <MyPageSearchBar /> */}
        </S.BlogHeader>
        <Blank height="30px" />
        <div style={{ width: "90%" }}>
          <Row xs={1} md={3} className="g-4">
            {props.data?.fetchBloglike.map((el) => (
              <Col key={el.id}>
                <BlogCard01 key={uuidV4()} data={el} />
              </Col>
            ))}
          </Row>
        </div>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
