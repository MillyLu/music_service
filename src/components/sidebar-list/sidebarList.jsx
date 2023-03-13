import { useState, useEffect} from 'react';
import * as Styled from './styles';
import { SidebarItem } from "../sidebar-item/sidebarItem";
import { SidebarSkeleton } from '../sidebar-skeleton/sidebarSkeleton';



export function SidebarList() {
    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 300);
    }, []);
 
    return(
        <Styled.SidebarList>
            {!skeleton ?
            (<>
                <SidebarItem image = "playlist01.png" href="/playlist/1" />
                <SidebarItem image = "playlist02.png" href="/hits/1" />
                <SidebarItem image = "playlist03.png" href="/indi/1" />
            </>)
                
                :
            (<>
                <SidebarSkeleton />
                <SidebarSkeleton />
                <SidebarSkeleton />
            </>)
                

            }
        </Styled.SidebarList>
    )
}