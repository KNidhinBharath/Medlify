
import { CssBaseline } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
        <CssBaseline/>
        <Outlet/>
    </div>
  );
}

export default App;
