import { useEffect, useState } from 'react';
import Title from './components/Title/Title';
import { getBible } from './util/apiCalls.js';
import './App.css';

const App = () => {
  const [verses, setVerses] = useState()
  useEffect(() =>{
    fetchBible()
  }, [])
const fetchBible = () => {
  getBible()
  .then(response => console.log(response))
}
    return(
      <main className='App'>
        <Title />
      </main>
    )
  }

export default App;
