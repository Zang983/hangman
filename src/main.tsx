import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import './app.css'
import { RouterProvider } from 'react-router-dom'
import Layout from './pages/layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
)
