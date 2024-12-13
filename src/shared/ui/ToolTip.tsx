import { useId, ReactElement } from 'react';
import { Tooltip } from 'react-tooltip';

type PlaceProps = 'top' | 'left' | 'right' | "bottom";

interface TooTipProps {
    toolTipContent: string,
    children: ReactElement,
    place?: PlaceProps,
}

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
