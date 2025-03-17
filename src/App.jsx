import PWABadge from './PWABadge.jsx'
import { Outlet } from 'react-router'

function App() {
 

  return (
    <>
      <div id='detail'>
        <Outlet/>
      </div>
      <PWABadge />
    </>
  )
}

export default App
