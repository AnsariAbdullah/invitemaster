import { useState, useContext, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';

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
      <NavBar />
      <Outlet />
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
