import {Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import BlogItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<About />} />
          <Route path="/blogs/:id" element={<BlogItemDetails />} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App