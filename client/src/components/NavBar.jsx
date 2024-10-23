import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/Dashboard';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background: antiquewhite;
  .links {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
`;

const NavBar = () => {
  const { user } = useDashboardContext();
  return (
    <NavWrapper>
      <div></div>
      <div className='links'>
        <NavLink to='.'>Create</NavLink>
        <NavLink to='/dashboard/invite-table'>Table</NavLink>
      </div>
      <div className='profile'>{user.name}</div>
    </NavWrapper>
  );
};
export default NavBar;
