import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IBlog, IQuery, IUser } from "../../../../commons/types/generated/types";
import { ICodingUsMainProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsMainUI from "./CodingUsMain.Presenter";
import { FETCH_BEST_USER_AND_BLOG, FETCH_BLOG_ALL, FETCH_OTHER_STATE_ORDER_BY_LIKE } from "./CodingUsMain.Queries";


export default function CodingUsMain(props: ICodingUsMainProps) {
  const [fetchBestUserAndBlog, { data }] = useLazyQuery(
    FETCH_BEST_USER_AND_BLOG
  );
  const {data: questionData} = useQuery<Pick<IQuery,"fetchotherStackorderbylike">>(FETCH_OTHER_STATE_ORDER_BY_LIKE);
  const {data: fetchBlogAllData} = useQuery<Pick<IQuery,"fetchBlogAll">>(FETCH_BLOG_ALL);
  const { moveToPage } = useMoveToPage();
  const [bestUserItems, setBestUserItems] = useState<
    {
      user: IUser;
      blog: IBlog;
    }[]
  >([]);
  useEffect(() => {
    const getBestUserData = async () => {
      try {
        const result = await fetchBestUserAndBlog();
        const data = result.data;
        if (data) {
          console.log(data);
          const temp: {
            user: IUser;
            blog: IBlog;
          }[] = [];
          let cnt = 0;
          for (let i = 0; i < 3; i++) {
            console.log(data.fetchUserOrderbyscore[i]);
            if (cnt === 3) break;
            for (let j = 0; j < data.fetchBlogAll.length; j++) {
              if (
                data.fetchBlogAll[j]?.user?.nickname ===
                data.fetchUserOrderbyscore[i].nickname
              ) {
                console.log(data.fetchBlogAll[i]);
                console.log(data.fetchUserOrderbyscore[j]);
                temp.push({
                  user: data.fetchUserOrderbyscore[j],
                  blog: data.fetchBlogAll[i],
                });
                break;
              }
            }
            cnt++;
          }
          if (temp.length < 1) return;
          console.log("bestUserItems", temp);
          // temp = temp.map((el) => {
          //   return { ...el, blogtag: el.blog.blogtag.map((tag) => tag.tag) };
          // });
          setBestUserItems(temp);
        }
      } catch (err: any) {
        alert(err.message);
      }
    };
    getBestUserData();
  }, []);


  const onClickItem = (id: string) => () => {};
  const onClickFollow = (id: string) => () => {};
  const onClickLike = (id: string) => () => {};
  return (
    <CodingUsLayout
      children={
        <CodingUsMainUI
          moveToPage={moveToPage}
          onClickItem={onClickItem}
          onClickFollow={onClickFollow}
          onClickLike={onClickLike}
          bestUserItems={bestUserItems}
          blogRecommendItems={fetchBlogAllData && fetchBlogAllData.fetchBlogAll.filter((_,idx) => idx < 8)}
          bestQuestions={questionData?.fetchotherStackorderbylike.filter((_, idx) => idx <6)!}
          data={data}
        />
      }
    ></CodingUsLayout>
  );
}
