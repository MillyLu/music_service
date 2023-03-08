import { NavLink } from "react-router-dom";
import * as Styled from './styles'

export function SidebarItem(props) {

    return(
        <Styled.SidebarItem>
            <NavLink className="App-link" to={props.href}>
                <Styled.SidebarImage src={props.image} alt='day"s playlist' />
            </NavLink>
        </Styled.SidebarItem>
    )
}
