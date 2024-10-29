import { useState } from 'react';
import { BsFileEarmarkDiff, BsFillPencilFill, BsTrash3 } from 'react-icons/bs';
import testImg from '@shared/assets/고양이.jpeg';

export const Thread = () => {
   const [textLine, setTextLine] = useState(false);
   const onClickMoreText = () => setTextLine(!textLine);
   return (
         <div className="bg-shade_2 flex w-full gap-4 rounded-lg px-5 py-3 shadow-md">
            {/* entities area */}
            <div className="flex grow flex-col gap-3">
               {/* 작성자이미지, 작성자이름, 작성날짜 */}
               <div className="flex items-center gap-3">
                  <div className="h-9 w-9">
                     <img className="service-img" src={testImg} />
                  </div>
                  <div>
                     <span className="text-gray">작성자이름</span>
                  </div>
                  <div>
                     <span className="text-shade_5 text-xs">2024-01-01</span>
                  </div>
               </div>
               {/* thred 내용 */}
               <p
                  className={`dark:text-gray text-justify text-sm leading-6 text-black ${textLine ? 'line-clamp-none max-h-full' : 'line-clamp-1 max-h-6'} transition-all duration-150`}>
                  모든 사용자는 다양한 정보와 데이터를 바탕으로 의사결정을 내리게 됩니다. 따라서 효율적인 정보 관리와
                  전달은 현대 사회에서 필수적인 요소로 자리 잡고 있습니다. 특히 디지털 환경이 발전함에 따라 신속한
                  데이터 접근과 정밀한 분석이 가능해졌으며, 이를 통해 개인과 기업은 더 나은 성과를 도출할 수 있습니다.
                  정보의 홍수 속에서 중요한 것은 올바른 데이터를 선별하고 필요한 순간에 적절히 활용하는 것입니다. 또한
                  협업 도구와 클라우드 서비스의 발전으로 원격 근무 환경에서도 다양한 정보 자원을 손쉽게 관리할 수 있게
                  되었습니다. 그러나 이러한 편리함에는 보안과 프라이버시 보호에 대한 문제도 함께 따릅니다. 안전한 정보
                  관리는 단순히 기술적 접근만으로 해결되지 않으며, 정책과 윤리적인 관점에서도 고려가 필요합니다. 앞으로
                  정보 활용이 더욱 중요해질수록 우리는 데이터의 신뢰성과 보안을 지속적으로 강화해야 합니다. 이는 기술의
                  발전과 함께 규제와 법률이 조화를 이루어야 함을 의미하며, 궁극적으로는 정보의 투명성과 사용자의 권리를
                  보장하는 방향으로 나아가야 합니다. 기업과 개인은 정보 보호를 최우선 과제로 삼아야 하며, 신뢰할 수 있는
                  정보 환경을 구축하기 위해 모두가 노력해야 합니다.모든 사용자는 다양한 정보와 데이터를 바탕으로
                  의사결정을 내리게 됩니다. 따라서 효율적인 정보 관리와 전달은 현대 사회에서 필수적인 요소로 자리 잡고
                  있습니다. 특히 디지털 환경이 발전함에 따라 신속한 데이터 접근과 정밀한 분석이 가능해졌으며, 이를 통해
                  개인과 기업은 더 나은 성과를 도출할 수 있습니다. 정보의 홍수 속에서 중요한 것은 올바른 데이터를
                  선별하고 필요한 순간에 적절히 활용하는 것입니다. 또한 협업 도구와 클라우드 서비스의 발전으로 원격 근무
                  환경에서도 다양한 정보 자원을 손쉽게 관리할 수 있게 되었습니다. 그러나 이러한 편리함에는 보안과
                  프라이버시 보호에 대한 문제도 함께 따릅니다. 안전한 정보 관리는 단순히 기술적 접근만으로 해결되지
                  않으며, 정책과 윤리적인 관점에서도 고려가 필요합니다. 앞으로 정보 활용이 더욱 중요해질수록 우리는
                  데이터의 신뢰성과 보안을 지속적으로 강화해야 합니다. 이는 기술의 발전과 함께 규제와 법률이 조화를
                  이루어야 함을 의미하며, 궁극적으로는 정보의 투명성과 사용자의 권리를 보장하는 방향으로 나아가야
                  합니다. 기업과 개인은 정보 보호를 최우선 과제로 삼아야 하며, 신뢰할 수 있는 정보 환경을 구축하기 위해
                  모두가 노력해야 합니다.
               </p>
               {/* 파일목록 */}
               <div className="flex gap-3">
                  <span className="bg-shade_3 theme-text flex items-center justify-start rounded-lg p-2 text-xs">
                     파일이름1
                  </span>
                  <span className="bg-shade_3 theme-text flex items-center justify-start rounded-lg p-2 text-xs">
                     파일이름2
                  </span>
                  <span className="bg-shade_3 theme-text flex items-center justify-start rounded-lg p-2 text-xs">
                     파일이름3
                  </span>
               </div>
            </div>

            {/* features area */}
            {/* 파일다운로드 버튼, 수정버튼, 삭제버튼 */}
            <div className="flex flex-col gap-3">
               <div className='basis-9 flex items-center gap-4'>
                  <span className="theme-text theme-hover-text h-4 w-4">
                     <BsFileEarmarkDiff size={'100%'} />
                  </span>
                  <span className="theme-text theme-hover-text h-4 w-4">
                     <BsFillPencilFill size={'100%'} />
                  </span>
                  <span className="theme-text theme-hover-text h-4 w-4">
                     <BsTrash3 size={'100%'} />
                  </span>
               </div>
               <div className="whitespace-nowrap leading-6">
                     <span
                        className={`theme-hover-text text-gray self-end font-bold ${textLine ? 'text-primary' : ''}`}
                        onClick={onClickMoreText}>
                        {textLine ? '접기' : '더보기'}
                     </span>
                  </div>
            </div>
         </div>
   );
};
