import { useId } from 'react';
import { Tooltip } from 'react-tooltip';
import {TooTipProps} from "./types";

export const ToolTip = (props : TooTipProps) => {
   const { toolTipContent, children, place} = props;
   const uniqueId = useId();

   return (
        <div data-tooltip-id={uniqueId} className='tooltip'>
            {children}
            <Tooltip id={uniqueId} content={toolTipContent} place={place ?? "top"} className='item'/>
        </div>
   );
};
