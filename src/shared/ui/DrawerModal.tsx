import { createPortal } from 'react-dom';

/*
    react-tooltip의 원리는 이렇다.
    어쨋든 createPortal을 기반으로, document.body에서 렌더링 하기때문에,
    overflow, z-index에 대한 영향을 받지않는다. (FullScreen은 영향을 받으니 다시확인)
    그렇기에 해당 모달에서는 클릭된 요소의 좌표값과, children을 받아서 처리하면된다.
    여기서 의문점은 data-*를 사용하지않아도 클릭된 태그의 위치 좌표만을 전송하여 처리하면될것같은데?
    재사용성을 위해 data-*을 입력해야 겹치지않는다? 테스트해보자
    getAttribute를 통해 data-*에 접근을하고,
    getBoundingClientRect를 통해 요소의 좌표값을 가져올수가 있다.

    특정 태그의 부모에 고정되어 있어야하며,
    부모를 따라가야한다.

*/

export const DrawerModal = ( props ) => {
    const {place, children} = props;
    const {top, right, left, bottom,  } = props.position;

    const asideElement = document.querySelector('aside')
    const placeStyle = {
        top: "",
        right:"",
        bottom:"",
        left: "",
    }

   return createPortal(
   <div className="absolute top-[247px] left-[340px] p-2 bg-primary rounded-lg">
        {children}
    </div>
   , document.body);
};
