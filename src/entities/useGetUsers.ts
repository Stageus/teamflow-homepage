import { useEffect, useState } from 'react';

interface ProfileInfoObject {
   userIdx: number;
   nickname: string;
   email: string;
   profileImage: string;
   teamSpaceOwnCount: number;
   teamSpaceCount: number;
};
type GetProfileInfoObject = ProfileInfoObject | null;

/**
 * @returns **profileInfo:** 요청이후 사용자 정보를 담은 data입니다.
 * @example - const { profileInfo } = useGetUsers();
*/
export const useGetUsers = () => {
   const [profileInfo, setProfileInfo] = useState<GetProfileInfoObject>(null);

   useEffect(()=>{
      setProfileInfo({
         userIdx: 1,
         nickname: '테스트유저닉네임',
         email: 'userEmail@gmail.com',
         profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&s',
         teamSpaceOwnCount: 250, // 내가 생성한 teamspace 개수
         teamSpaceCount: 240, // 내가 참여 중인 teamspace 개수
      })
   },[])

   return { profileInfo };
};
