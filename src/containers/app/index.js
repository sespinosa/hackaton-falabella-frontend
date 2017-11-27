import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Ceci from '../ceci'

const App = () => (
  <div className='ceci-body'>
{/*     <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header> */}
      <Route exact path="/" component={Ceci} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={About} />
  </div>
)

export default App