import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
// import Convert from './components/Convert'
import About from './components/about'

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      
      <div className='container my-3'>

       <About/>

        {/* <Convert/> */}
        {/* <TextForm heading="Enter the text to analyze" /> */}
      </div>
    </>
  );
}

export default App;
