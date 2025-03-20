import Navbar from './components/Navbar.jsx'
import PWABadge from './PWABadge.jsx'
import { Outlet } from 'react-router'

function App() {
 

  return (
    <>
    <Navbar/>
      <div id='detail'>
        <Outlet/>
      </div>
      <PWABadge />
    </>
  )
}

export default App
