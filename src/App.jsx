import Navbar from './components/Navbar.jsx'
import PWABadge from './PWABadge.jsx'
import { Outlet } from 'react-router'

function App() {
 

  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
      <div id='detail'>
        <Outlet/>
      </div>
      <PWABadge />
    </div>
  )
}

export default App
