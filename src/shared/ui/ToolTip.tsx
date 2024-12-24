import * as React from 'react';
import { Tooltip } from 'react-tooltip';

const ToolTip = (props: TooTipProps) => {
   const { toolTipContent, children, place } = props;
   const uniqueId = React.useId();

   return (
      <div data-tooltip-id={uniqueId}>
         <Tooltip id={uniqueId} content={toolTipContent} place={place ?? 'top'}/>
         {children}
      </div>
   );
};

export { ToolTip };

type TooTipProps = {
    toolTipContent: string;
    children: React.ReactElement;
    place?: 'top' | 'left' | 'right' | 'bottom';
} & {};


