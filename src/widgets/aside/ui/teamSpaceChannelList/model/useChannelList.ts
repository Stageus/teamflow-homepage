import { useState } from 'react';
export const useChannelList = () => {
   const [channelList, setChannelList] = useState(false);
   const toogleChannelList = () => setChannelList(!channelList);

   return { channelList, toogleChannelList };
};
