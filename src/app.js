import './styles/app.css'
import './styles/header.css'
import './styles/left-menu.css'
import './styles/main.css'
import Header from './header/header.jsx'
import LeftMenu from './left-menu/left-menu.jsx'
import Main from './main/main.jsx'

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
