import { useEffect, useState } from 'react';
import Form from './components/Form/Form.js';
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
        <Form />
      </main>
    )
  }

export default App;
