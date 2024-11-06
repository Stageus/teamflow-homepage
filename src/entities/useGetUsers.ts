import { useState } from 'react';

interface ProfileInfoObject {
   userIdx: number;
   nickname: string;
   email: string;
   profileImage: string;
   teamSpaceOwnCount: number;
   teamSpaceCount: number;
};
type GetProfileInfoObject = ProfileInfoObject | null;

export const useGetUsers = () => {
   const [profileInfo, setProfileInfo] = useState<GetProfileInfoObject>({
      userIdx: 1,
      nickname: '테스트유저 닉네임',
      email: 'userEmail@gmail.com',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&s',
      teamSpaceOwnCount: 250, // 내가 생성한 teamspace 개수
      teamSpaceCount: 240, // 내가 참여 중인 teamspace 개수
   });

   return { profileInfo };
};
