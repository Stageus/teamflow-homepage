import userProfile from '../assets/userProfile.svg';
export const RoundProfile = (props: { imgUrl?: string }) => {
   const { imgUrl } = props;

   return <img src={imgUrl ?? userProfile} className="w-full h-full rounded-full" />;
};
