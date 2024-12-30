import * as React from 'react';

const PrivatechannelContext = React.createContext<PrivatechannelContextType | null>(null);

const PrivateChannelProvider = (props: PrivateChannelProviderProps) => {
   const [privateChannel, setPrivateChannel] = React.useState(null);
   const savePrivateChannel = (channelIdx: number, channelName: string) =>
      setPrivateChannel({ channelIdx, channelName });
   const removePrivateChannel = () => setPrivateChannel(null);

   return (
      <PrivatechannelContext.Provider value={{ privateChannel, savePrivateChannel, removePrivateChannel }}>
         {props.children}
      </PrivatechannelContext.Provider>
   );
};

export { PrivatechannelContext, PrivateChannelProvider };

type PrivateChannel = {
   channelIdx: number;
   channelName: string;
} & {};

type PrivatechannelContextType = {
   privateChannel: PrivateChannel;
   savePrivateChannel: (channelIdx: number, channelName: string) => void;
   removePrivateChannel: () => void;
} & {};

type PrivateChannelProviderProps = {
   children: React.ReactNode;
};
