export const dummyMD = `
![](https://media.vlpt.us/images/choigeon96/post/e543f16a-29ad-409b-bdf6-284b6c96a8c5/bear.png)
#### 요즘 새롭게 떠오르고 있는 상태 관리 라이브러리인 **Zustand**를 사용해 봤다.

## 왜 Zustand 인가?
지금까지 React 환경에서 상태 관리를 위해 Context API를 사용해왔다.
얼마 전 Context API를 사용해 다크 모드(고대비) 기능을 구현하던 중 의도치 않은 리랜더링이 일어나 곤란했던 경험이 있다.

Context API를 사용하기 위해선 아래 코드와 같이 부모 컴포넌트로 \`Context.Provider\` 컴포넌트를 선언한 후 값을 전달해 줘야 하는데, 이렇게 전달받은 Context를 사용하는 모든 하위 컴포넌트는 해당 Context의 값이 변경될 때 리랜더링이 되게 된다.
\`\`\`js
// 다크모드 사용을 위해 isDark 값을 변경했는데, todayItem(오늘 본 상품)을 사용하는 상품 목록 컴포넌트까지 리랜더링이 된다!
function MyComponent({ Component, pageProps }: AppProps) {
  const GlobalContext = createContext<IGlobalContext>({
    todayItem: {},
    isDark: false,
  });
  // ...
  const values = {
    todayItem,
    isDark,
  };
  // ...
  return(
      <GlobalContext.Provider value={values}>
		<Component {...pageProps} />
      </GlobalContext.Provider>
    );
}
\`\`\`

<img src="https://images.velog.io/images/choigeon96/post/74437632-a229-45ea-a545-526fe95a813d/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202022-03-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.27.gif" />
(불필요한 리랜더링이 발생하고 있다.)

이 문제를 해결하기 위해 \`React.memo\` , \`useMemo\` 를 사용해 보려 했지만 익숙하지도 않고 코드도 복잡해지는 것 같아 다음으로 미루고 넘어갔었다...
(Context를 여러 개로 나눠서 사용하는 방법도 있다고 한다.)

그렇게 다음 프로젝트를 준비하면서 \`Redux\`를 사용해 보기 위해 공부하던 중 **Zustand**에 대한 정보를 접하게 되었고, Zustand를 사용하면 \`Redux\` 나 \`Context-API\` 를 사용할 때 보다 쉽게 위와 같은 리랜더링 문제를 쉽게 해결할 수 있겠다는 생각이 들어 예제를 보면서 한번 적용시켜봤다.


#### 결과

<img src = "https://images.velog.io/images/choigeon96/post/42c9af82-d9ee-4c7f-95e0-0fb815d2a1a5/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202022-03-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.55.00.gif" />

이래도 되는걸까? 싶을 정도로 쉽고 편하게 적용할 수 있었다.




## Zustand 사용 방법
### 설치
터미널에 아래 명령을 입력해 Zustand를 설치한다.

\`\`\`shell
# npm 사용
npm install zustand
# yarn 사용
yarn add zustand
\`\`\`

### store 생성
\`\`\`js
// store.js
import create from "zustand";
const useStore = create((set) => ({
    isDark: false,
    toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;
\`\`\`
Zustand에서 제공하는\`create\`함수를 사용해 \`useStore\` 훅을 생성한다. 
\`set\` 함수는 state의 값을 변경하는 콜백 함수를 인자로 받는다.

이렇게 만들어진 store를 가져다 사용하기만 하면 된다.

### store 값 사용
위에서 만든 \`useStore\` 를 사용해 store의 값을 사용할 수 있다.
\`useStore\` 훅은 어떤 값을 가져올지 선택하는 셀렉터 함수를 인자로 받는다.
(셀렉터 함수를 전달하지 않으면 스토어 전체가 반환된다.)
\`\`\`js
import useStore from "../../../../commons/store/store";

function MarketList() {
  const router = useRouter();
  // const { isDark } = useContext(GlobalContext);
  const isDark = useStore((state) => state.isDark);
  // 셀렉터 함수를 전달하지 않고, 구조분해 할당을 통해 값을 가져올 수 있다.
  // const { isDark } = useStore();
  return(
    	<S.CardWrapper>
          {props.data?.map((el) => (
            <Card01
              key={el._id}
              data={el}
              onClickItem={props.onClickItem(el)}
              isDark={isDark ?? false}
            />
          ))}
		</S.CardWrapper>
    )
  
\`\`\`
### store 값 변경
\`useStore\` 를 생성할 때 \`set\` 함수를 사용해 state의 값을 변경하는 함수를 만들었었다.
값을 사용할 때와 마찬가지로 값 변경 함수를 가져와 사용하여 store의 값을 변경한다.
\`\`\`js
import useStore from "../store/store";
export default function Layout(props: ILayoutProps) {
  
  const isDark = useStore((state) => state.isDark);
  
  return(
    <DarkLightToggle
      onClick={useStore((state) => state.toggleIsDark)}
      isDarkMode={isDark} />
      {!isDark ? "다크 모드로 보기" : "라이트 모드로 보기"}
    </DarkLightToggle>
  )
\`\`\`
### Devtools 사용
**Zustand**의 장점 중 하나는 미들웨어를 통해 Redux-devtools을 사용할 수 있다는 것이다.

Redux DevTools 설치 : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko

\`zustand/middleware\`에서 \`devtools\`를 import 시켜주고, \`create\` 의 콜백 함수를 \`devtools\`로 감싸주기만 하면 Redux-devtools를 사용해 store의 상태를 확인할 수 있다.
\`\`\`js
// store.js
import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    isDark: false,
    toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
  })

const useStore = create(devtools(store));

export default useStore;
\`\`\`
Redux-devtools를 사용해 store의 상태를 확인 가능하다.
<img src = "https://images.velog.io/images/choigeon96/post/15f8e87d-067b-4693-b488-e638ae37b785/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202022-03-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.51.25.gif" align= "left"/>
</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>

>참고
https://www.youtube.com/watch?v=jLcF0Az1nx8
https://www.youtube.com/watch?v=zNHZJ_iEMPA&t=3s 
https://ui.toast.com/weekly-pick/ko_20210812
https://bestofreactjs.com/repo/pmndrs-zustand-react-awesome-react-hooks
`;
