import { useState } from 'react';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import Convert from './components/Convert'
// import About from './components/about'
import Alert from './components/Alert'

function App() {

  const [mode, setMode] = useState('dark')
  const [search, setSearch] = useState('secondary')
  const [CssColor, setColor] = useState("light")
  const [alert, setAlert] = useState(null)

  const ChangeMode = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white'
      setMode('light')
      setColor('black')
      setSearch('light')
      alertFunction("Light mode successfully Enabled", "success")
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#022a4d'
      setColor('white')
      setSearch('secondary')
      alertFunction("Dark mode successfully Enabled", "success")
    }
  }

  const alertFunction = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} ChangeMode={ChangeMode} search={search} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <About /> */}
        <Convert showAlert={alertFunction} text={CssColor} textArea={search} />
        {/* <TextForm heading="Enter the text to analyze" /> */}
      </div>
    </>
  );
}

export default App;
