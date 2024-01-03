
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

import Materiais from './components/pages/Materiais'

import Periodo1 from './components/pages/periodos/Periodo1'

import Algoritmos from './components/pages/disciplinas/Algoritmos'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="contact/*" element={<Contact />} />

          <Route path="materiais/*" element={<Materiais />} />

          <Route path="periodo1/*" element={<Periodo1 />} />

          <Route path="algoritmos/*" element={<Algoritmos />} />
        </Routes>
      </Container>
      <Footer />
    </Router> 
  )
}

export default App
