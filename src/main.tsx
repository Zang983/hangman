import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import './app.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router} />
)
