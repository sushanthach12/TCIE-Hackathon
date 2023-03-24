import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AuthState from './Context/Auth/AuthState';
import BedState from './Context/Bed/BedState';
import HospitalState from './Context/Hospital/HospitalState';
import AllRoutes from './Routes/AllRoutes';

function App() {

  const [key, setKey] = useState(Math.random)
  const [user, setUser] = useState({
    user: {},
    isLoggedIn: false,
    token: ""
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    setUser({ ...user, token: token })
  }, [])

  return (
    <>
      <AuthState>
        <BedState>
        <HospitalState>
        {key && <Navbar user={user} setKey={setKey} key={key}/>}
        <div className="mainBox mx-4 px-4 py-8 min-h-screen pb-20">
          <AllRoutes setKey={setKey} />
        </div>
        </HospitalState>
        </BedState>

      </AuthState>
    </>
  );
}

export default App;