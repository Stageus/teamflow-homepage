import * as React from 'react';

const PrivatechannelContext = React.createContext<PrivatechannelContextType | null>(null);

const PrivateChannelProvider = (props: PrivateChannelProviderProps) => {
   const [privateChannel, setPrivateChannel] = React.useState(null);
   const savePrivateChannel = (channelKey: number, channelName: string) => setPrivateChannel({key: channelKey, name:channelName});
   const removePrivateChannel = () => setPrivateChannel(null)

   return (
      <PrivatechannelContext.Provider value={{ privateChannel, savePrivateChannel, removePrivateChannel }}>
         {props.children}
      </PrivatechannelContext.Provider>
   );
};

export { PrivatechannelContext, PrivateChannelProvider };

type PrivateChannel = {
   key: number;
   name: string
} & {};

type PrivatechannelContextType = {
   privateChannel: PrivateChannel | null;
   savePrivateChannel: (channelKey: number, channelName:string) => void;
   removePrivateChannel: () => void;
};

type PrivateChannelProviderProps = {
   children: React.ReactNode;
};
