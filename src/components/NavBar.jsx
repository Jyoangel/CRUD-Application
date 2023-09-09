
import {AppBar,Toolbar, Typography,styled} from '@mui/material';

import {NavLink} from 'react-router-dom';

const Header =styled(AppBar)`
   background: #111111;
`
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar =()=>{
    return(
        <Header position ="static">
            <Toolbar>
               <Tabs to ="/">Food Company</Tabs> 
               <Tabs to ="/all">All Employees</Tabs>
               <Tabs to ="/add">Add Employees</Tabs>
            </Toolbar>
        </Header>
    )
};

export default NavBar;