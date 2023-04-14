import { useState } from 'react';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
// import Convert from './components/Convert'
import About from './components/about'

function App() {

  const [mode, setMode] = useState('dark')
  const ChangeMode = () => {
    if(mode === 'dark'){
      setMode('light')
    }else{
      setMode('dark')
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} ChangeMode={ChangeMode}/>

      <div className='container my-3'>

        <About />

        {/* <Convert/> */}
        {/* <TextForm heading="Enter the text to analyze" /> */}
      </div>
    </>
  );
}

export default App;
