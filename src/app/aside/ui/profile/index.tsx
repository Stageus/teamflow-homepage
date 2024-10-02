import { BsPerson, BsGearFill } from "react-icons/bs";
export const Profile = () => {
    return(
        <div className="flex items-center gap-2 p-1">
            <div className="w-[50px] h-[50px] flex justify-center items-center text-primary-gray"><BsPerson size={"100"}/></div>
            <div className="flex justify-start flex-col flex-grow">
                <span className="text-primary-gray">userEmail@gmail.com</span>
                <span className="text-primary-color">테스트유저 닉네임</span>
            </div>
            <div className="w-[50px] h-[50px] flex justify-end items-center text-primary-black dark:text-primary-white cursor-pointer">
                <BsGearFill size={"25"}/>
            </div>
        </div>
    );
}