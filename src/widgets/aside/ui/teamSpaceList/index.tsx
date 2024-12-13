// package
import { useMatch } from 'react-router-dom';
// layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { PATHS } from '@/shared/consts/paths';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/lib/cn';

export const TeamSpaceList = () => {
   const { teamspaceRoute } = useRoute();
   const match = useMatch({
      path: `/${PATHS.teamSpace}/:${PATHS.teamSpaceName}`,
      end: false,
   });

   const _TeamSpaceQucikList = Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
   ]).map((_, idx) => ({
      teamSpaceIdx: idx,
      teamSpaceName: `TeamspaceName${idx}`,
   }));

   return (
      <div className="flex flex-col h-full gap-3 p-1 overflow-y-scroll scroll cursor-grab">
         {_TeamSpaceQucikList.map(item => {
            return (
               <ToolTip key={item.teamSpaceIdx} toolTipContent={item.teamSpaceName} place="right">
                  <Button
                     className={cn('h-12 w-12 rounded-full p-1 text-sm truncate block')}
                     variant={match?.params.teamspace_name === item.teamSpaceName ? 'select' : 'default'}
                     onClick={() => teamspaceRoute(item.teamSpaceName)}>
                     {item.teamSpaceName}
                  </Button>
               </ToolTip>
            );
         })}
      </div>
   );
};
