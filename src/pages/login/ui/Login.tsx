import { useRoute } from "@shared/hooks";

export const Login = () => {
   const { signupRoute } = useRoute();

   return (
      <div className="h-full flex justify-center items-center gradient-light dark:gradient-dark">
         <div className="flex flex-col justify-center items-center gap-5 px-10 py-5 bg-transparent rounded-lg shadow-xl min-w-[400px] min-h-[300px]">
            <div>
               <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="50" transform="matrix(-1 0 0 1 100 0)" fill="#3578FF" />
                  <path
                     d="M49.9287 36.25H53.4787C55.3454 36.25 56.8454 36.7167 57.9787 37.65C59.112 38.5833 59.8787 40.1167 60.2787 42.25H61.7787L61.0287 38C60.7954 36.8 60.312 35.8333 59.5787 35.1C58.8454 34.3667 57.6787 34 56.0787 34H32.5787L32.9787 36.25H43.4287L48.8287 67H55.3287L49.9287 36.25Z"
                     fill="#FAFAFA"
                  />
               </svg>
            </div>
            <h1 className="italic">TeamFlow</h1>
            <h2>TeamFlow에 오신것을 환영합니다!</h2>
            <button className='button-layout button-type-active' onClick={signupRoute}>
               <svg width="25px" height="25px" viewBox="0 0 753 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M752.64 392.727C752.64 365.498 750.196 339.316 745.658 314.182H384V462.895H590.662C581.585 510.72 554.356 551.215 513.513 578.444V675.142H638.138C710.749 608.116 752.64 509.673 752.64 392.727Z" fill="#4285F4"/>
                  <path d="M384 768C487.68 768 574.604 733.789 638.138 675.142L513.513 578.444C479.302 601.484 435.665 615.447 384 615.447C284.16 615.447 199.331 548.073 168.96 457.309H41.1927V556.451C104.378 681.775 233.891 768 384 768Z" fill="#34A853"/>
                  <path d="M168.96 456.96C161.28 433.92 156.742 409.484 156.742 384C156.742 358.516 161.28 334.08 168.96 311.04V211.898H41.1927C15.0109 263.564 0 321.862 0 384C0 446.138 15.0109 504.436 41.1927 556.102L140.684 478.604L168.96 456.96Z" fill="#FBBC05"/>
                  <path d="M384 152.902C440.553 152.902 490.822 172.451 530.967 210.153L640.931 100.189C574.255 38.0509 487.68 0 384 0C233.891 0 104.378 86.2255 41.1927 211.898L168.96 311.04C199.331 220.276 284.16 152.902 384 152.902Z" fill="#EA4335"/>
               </svg>
               <span>Google 로그인</span>
            </button>
         </div>
      </div>
   );
};
