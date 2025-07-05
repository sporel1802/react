import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>snehasish </h1>
//     </div>
//   )
// }

// const anotherelement=(
//   <a href="https://google.com" target='_blank'> visit me</a>
// )

// const reactElement=React.createElement(
//   'a',
//   {href:'https://google.com' ,target:"_blank"},
//   'click me'
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyApp />
//   </StrictMode>,
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
 )
// createRoot(document.getElementById('root')).render(

//    // anotherelement
//    reactElement

// );