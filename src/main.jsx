import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/layout/Header'
import Footer from './Components/layout/Footer'
import ContactIndex from './Components/ContactPages/ContactIndex'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='d-flex flex-column min-vh-100'>
      <Header />
        <div className='flex-fill'>
          <div>
            <ContactIndex />
          </div>
        </div>
      <Footer />
    </div>
  </StrictMode>
)
