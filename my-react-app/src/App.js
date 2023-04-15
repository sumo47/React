import { useState } from 'react';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import Convert from './components/Convert'
// import About from './components/about'

function App() {

  const [mode, setMode] = useState('dark')
  const [search, setSearch] = useState('secondary')
  const [CssColor, setColor] = useState("light")
  const ChangeMode = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white'
      setMode('light')
      setColor('black')
      setSearch('light')
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#022a4d'
      setColor('white')
      setSearch('secondary')

    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} ChangeMode={ChangeMode} search={search} />

      <div className='container my-3'>

        {/* <About /> */}

        <Convert text={CssColor} textArea={search} />
        {/* <TextForm heading="Enter the text to analyze" /> */}
      </div>
    </>
  );
}

export default App;
