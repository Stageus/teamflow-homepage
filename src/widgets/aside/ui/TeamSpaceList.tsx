// layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/lib/cn';

const _TeamSpaceQucikList = Array.from([
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
]).map((_, idx) => ({
   teamSpaceIdx: idx,
   teamSpaceName: `TeamspaceName${idx}`,
}));

export const TeamSpaceList = ( props: TeamSpaceListProps) => {
   const { teamspaceRoute } = useRoute();

   return (
      <div className="flex flex-col h-full gap-3 p-1 overflow-y-scroll scroll cursor-grab">
         {_TeamSpaceQucikList.map(item => {
            return (
               <ToolTip key={item.teamSpaceIdx} toolTipContent={item.teamSpaceName} place="right">
                  <Button
                     className={cn('h-12 w-12 rounded-full p-1 text-sm truncate block')}
                     variant={ props.teamSpaceName === item.teamSpaceName ? 'select' : 'default'}
                     onClick={() => teamspaceRoute(item.teamSpaceName)}>
                     {item.teamSpaceName}
                  </Button>
               </ToolTip>
            );
         })}
      </div>
   );
};

type TeamSpaceListProps = {
   teamSpaceName: string | null;
};
