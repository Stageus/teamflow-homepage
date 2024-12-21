import userProfile from '../assets/userProfile.svg';
export const RoundProfile = (props: RoundProfileProps) => {
   const { imgUrl } = props;

   return <img src={imgUrl ?? userProfile} className="w-full h-full rounded-full" />;
};

type RoundProfileProps = {
   imgUrl?: string;
}
