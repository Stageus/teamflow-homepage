import { useNavigate, Outlet } from "react-router-dom";
import { Thread } from "@widgets/thread";
export const Test = () => {
   const navigate = useNavigate();

   
   return (
      <div className='max-h-full bg-shade_1'>
         <div className="flex gap-5">
         <button className="button-layout _active" onClick={()=>navigate("/")}>home</button>
         <button className="button-layout _active" onClick={()=>navigate("1")}>1</button>
         <button className="button-layout _active" onClick={()=>navigate("2")}>2</button>
         <button className="button-layout _active" onClick={()=>navigate("3")}>3</button>
         <button className="button-layout _active" onClick={()=>navigate("4")}>4</button>
         <button className="button-layout _active" onClick={()=>navigate("5")}>5</button>
         </div>
         
         <Outlet/>
         {/* <div className="p-10">
            <Thread/>
         </div>
          <div className="w-full">
            <h1>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </h1>
            <h2>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </h2>
            <p>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </p>
            <span>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </span>
            <button>
            버튼
            </button>

            <div className='w-full bg-white'>white</div>
            <div className='w-full bg-gray-50'>50</div>
            <div className='w-full bg-gray-100'>100</div>
            <div className='w-full bg-gray-200'>200</div>
            <div className='w-full bg-gray-300'>300</div>
            <div className='w-full bg-gray-400'>400</div>

            <div className='w-full text-white bg-gray-600'>600</div>
            <div className='w-full text-white bg-gray-700'>700</div>
            <div className='w-full text-white bg-gray-800'>800</div>
            <div className='w-full text-white bg-gray-900'>900</div>
            <div className='w-full text-white bg-gray-950'>950</div>
            <div className='w-full text-white bg-black'>black</div>

            <div className='flex items-center justify-center w-20 h-20 shadow-sm'>shadow-sm</div>
            <div className='flex items-center justify-center w-20 h-20 shadow'>shadow</div>
            <div className='flex items-center justify-center w-20 h-20 shadow-md'>shadow-md</div>
            <div className='flex items-center justify-center w-20 h-20 shadow-lg'>shadow-lg</div>
            <div className='flex items-center justify-center w-20 h-20 shadow-xl'>shadow-xl</div>
            <div className='flex items-center justify-center w-20 h-20 shadow-2xl'>shadow-2xl</div>
            <div className='flex items-center justify-center w-20 h-20 shadow-inner'>shadow-inner</div>
         </div>     

          */}
      </div>
   );
};
