import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
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
    setUser({...user, token: token})
  }, [])

  return (
    <>
      {key && <Navbar user={user} />}
      <div className="mainBox mx-4 px-4 py-8 min-h-screen pb-20">
        <AllRoutes setKey={setKey} />
      </div>
    </>
  );
}

export default App;