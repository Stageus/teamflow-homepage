import * as React from 'react';

const PrivatechannelContext = React.createContext<PrivatechannelContextType | null>(null);

const PrivateChannelProvider = (props: PrivateChannelProviderProps) => {
   const [privateChannelKey, setPrivateChannelKey] = React.useState(null);
   const savePrivateChannelKey = (channelKey: number) => setPrivateChannelKey(channelKey);

   return (
      <PrivatechannelContext.Provider value={{ privateChannelKey, savePrivateChannelKey }}>
         {props.children}
      </PrivatechannelContext.Provider>
   );
};

export { PrivatechannelContext, PrivateChannelProvider };

type PrivatechannelContextType = {
   privateChannelKey: number;
   savePrivateChannelKey: (value: number) => void;
};

type PrivateChannelProviderProps = {
   children: React.ReactNode;
};
