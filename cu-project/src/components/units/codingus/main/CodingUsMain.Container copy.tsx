import {
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStore from "../../../../commons/store/store";
import {
  IBlog,
  IMutation,
  IMutationCreateFollowArgs,
  IQuery,
  IUser,
} from "../../../../commons/types/generated/types";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsMainUI from "./CodingUsMain.Presenter copy";
import {
  CREATE_FOLLOW,
  FETCH_BEST_USER_AND_BLOG,
  FETCH_BLOG_ALL,
  FETCH_OTHER_STATE_ORDER_BY_LIKE,
} from "./CodingUsMain.Queries";

export default function CodingUsMain() {
  const router = useRouter();
  const accessToken = useStore((state) => state.accessToken);
  const [fetchBestUserAndBlog, { data }] = useLazyQuery(
    FETCH_BEST_USER_AND_BLOG
  );
  const { data: questionData } = useQuery<
    Pick<IQuery, "fetchotherStackorderbylike">
  >(FETCH_OTHER_STATE_ORDER_BY_LIKE);
  const { data: fetchBlogAllData } =
    useQuery<Pick<IQuery, "fetchBlogAll">>(FETCH_BLOG_ALL);
  const [createFollow] = useMutation<
    Pick<IMutation, "createFollow">,
    IMutationCreateFollowArgs
  >(CREATE_FOLLOW);
  const [bestUserItems, setBestUserItems] = useState<
    {
      user: IUser;
      blog: IBlog;
      isFollowed: Boolean;
    }[]
  >([]);
  const [errModalVisible, setErrModalVisible] = useState(false);
  const [errModalProps, setErrModalProps] = useState({
    mainText: "",
    subText: "",
    setModalVisible: setErrModalVisible,
  });
  useEffect(() => {
    const getBestUserData = async () => {
      try {
        const result = await fetchBestUserAndBlog();
        const data = result.data;
        if (data) {
          const temp: {
            user: IUser;
            blog: IBlog;
            isFollowed: Boolean;
          }[] = [];
          let cnt = 0;
          for (let i = 0; i < data?.fetchUserOrderbyscore?.length; i++) {
            if (cnt === 3) break;
            if (
              data.fetchBlogAll.filter(
                (el: IBlog) => el.user.id === data.fetchUserOrderbyscore[i].id
              )[0]
            ) {
              temp.push({
                user: data.fetchUserOrderbyscore[i],
                blog: data.fetchBlogAll.filter(
                  (el: IBlog) => el.user.id === data.fetchUserOrderbyscore[i].id
                )[0],
                isFollowed: false,
              });
              cnt++;
            }
          }
          if (temp.length < 1) return;
          setBestUserItems(temp);
        }
      } catch (err: any) {
        alert(err.message);
      }
    };
    getBestUserData();
  }, []);

  const onClickBestUserFollow = (targetId: string) => async () => {
    if (!targetId) return;
    if (!accessToken) {
      alert("로그인이 필요한 서비스입니다.");
      router.push("/login");
    }
    try {
      const result = await createFollow({
        variables: { followUserId: targetId },
      });
      if (!result.data?.createFollow.id) {
        alert("실패");
        return;
      }
    } catch (err: any) {
      setErrModalVisible(true);
      setErrModalProps((prev) => {
        return { ...prev, mainText: "알림", subText: err.message };
      });
    }
  }
    return (
      <CodingUsLayout
        children={
          <CodingUsMainUI
            bestUserItems={bestUserItems}
            blogRecommendItems={fetchBlogAllData?.fetchBlogAll
              ?.filter((_, idx) => idx < 8)
              .sort((a, b) => b.like - a.like)}
            bestQuestions={
              questionData?.fetchotherStackorderbylike.filter(
                (_, idx) => idx < 6
              )!
            }
            onClickMove={(path: string) => {
              router.push(path);
            }}
            data={data}
            onClickBestUserFollow={onClickBestUserFollow}
            errModalVisible={errModalVisible}
            errModalProps={errModalProps}
          />
        }
      ></CodingUsLayout>
    );
  };
