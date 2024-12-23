import { useCookies } from 'react-cookie';

export const useCookie = (dependenciesCookie: string) => {
   const [cookies, setCookie, removeCookie] = useCookies([dependenciesCookie], {
      // doNotParse: "boolean" -> 가져온 cookie값에 대한 객체 변환유무
      // doNotUpdate: "boolean" -> 컴포넌트 마운트될때 쿠키 업데이트 유무
   });
   const setCookieName = (name: string, value: string, period: Date) => {
      const express = period ? { expires: period } : {};
      return setCookie(name, value, { path: '/', ...express });
   };

   const removeCookieName = (name: string) => {
      console.log('name:', name);
      return removeCookie(name, { path: '/' });
   };

   return { cookies, setCookieName, removeCookieName };
};
