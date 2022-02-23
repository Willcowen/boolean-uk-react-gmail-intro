import './styles/app.css'
import Header from './header/header.js'
import LeftMenu from './left-menu/left-menu.js'
import Main from './main/main.js'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App
