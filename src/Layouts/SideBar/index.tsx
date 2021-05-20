import { Link } from 'react-router-dom';
import './index.css';

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="SideBarItem">
        <Link to="/a">pageA</Link>
      </div>
      <div className="SideBarItem">
        <Link to="/b">pageB</Link>
      </div>
      <div className="SideBarItem">
        <Link to="/c">pageC</Link>
      </div>
    </div>
  );
};

export default SideBar;
