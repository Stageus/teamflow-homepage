import { useState } from 'react';
export const useChannelList = () => {
   const [channelList, setChannelList] = useState(false);
   const onClickShowList = () => setChannelList(!channelList);

   return { channelList, onClickShowList };
};
