import {useRoutes} from 'react-router-dom'
import Routers from './routes/Index'

function App() {
  const element = useRoutes(Routers)
  return (
    <div>
      11
      {element}
    </div>
  )
}

export default App
