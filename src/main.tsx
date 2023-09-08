import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import './first.app'
import { GifExpertApp } from './forms/gifExpertApp'
// import MyApp from './first.app'
// import CounterApp from './assets/counter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifExpertApp
    />
  </React.StrictMode>,
)
