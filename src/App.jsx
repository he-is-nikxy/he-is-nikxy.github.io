import Dock from './Dock';
import './App.css';
import { VscHome, VscAccount } from 'react-icons/vsc';
import { GiSkills } from "react-icons/gi";
import { FcVideoProjector } from "react-icons/fc";
import { MdContactPhone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import SplashCursor from "./components/SplashCursor";



function App() {

  const navigate = useNavigate()

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate("/") },
    { icon: <GiSkills size={18} />, label: 'Skills', onClick: () => navigate("/skills") },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => navigate("/about") },
    { icon: <FcVideoProjector size={18} />, label: 'Projects', onClick: () => navigate("/projects") },
    { icon: <MdContactPhone size={18} />, label: 'Contact', onClick: () => navigate("/contact") },
  ];

  return (
    <>
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={100}
      />
    </div>

    <SplashCursor />
    <AllRoutes />
    </>
  )
}

export default App
