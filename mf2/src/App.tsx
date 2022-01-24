import React from 'react'
import logo from './logo.svg'
import './App.css'

//@ts-ignore
const MFE1Button = React.lazy(() => import('MFE1/Button'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <React.Suspense fallback="Loading Button">
          <MFE1Button />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
