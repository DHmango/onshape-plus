import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import TestAppOutOfExtension from './TestAppOutOfExtension'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App/> */}
    <TestAppOutOfExtension/>
  </StrictMode>,
)
