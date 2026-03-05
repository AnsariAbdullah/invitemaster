import { useState, useContext, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { BigSidebar, NavBar, SmallSidebar } from '../components';
import Wrapper from '../assets/wrappers/Dashboard';

const DashboardContext = createContext();

const Dashboard = () => {
  const user = {
    name: 'Abdullah',
  };
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log('toggle theme');
  };

  return (
    <DashboardContext.Provider
      value={{ user, isDarkTheme, setIsDarkTheme, toggleTheme }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <NavBar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
