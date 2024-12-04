import { useMatch } from 'react-router-dom';
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { PATHS } from '@/shared/consts/paths';

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
                  <button
                     className={`${match?.params.teamspace_name === item.teamSpaceName ? 'bg-primary text-white' : 'bg-shade_3 text-gray'} h-12 w-12 truncate rounded-full p-1 text-sm duration-200 hover:bg-secondary hover:text-white`}
                     onClick={() => teamspaceRoute(item.teamSpaceName)}>
                     {item.teamSpaceName}
                  </button>
               </ToolTip>
            );
         })}
      </div>
   );
};
