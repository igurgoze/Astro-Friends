import {
  Outlet
} from 'react-router-dom';
import NavTabs from './NavTabs';


export default function PortfolioContainer() {
  return (
  
      <div>
        {/* The current page's state string value, and the function which can be run to change it */}
        <NavTabs />
        {/* We're invoking a function that returns a component - always showing our user a page */}
        <Outlet />
      </div>
    
  );
}
