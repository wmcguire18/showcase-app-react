import { useEffect, useState } from 'react';
import Form from './components/Form/Form.js';
import DailyVerse from './components/DailyVerse/DailyVerse.js';
import Title from './components/Title/Title';
import { getBible, getDailyVerse } from './util/apiCalls.js';
import './App.css';

const App = () => {
  const [verses, setVerses] = useState()
  const [dailyVerse, setDailyVerse] = useState()
  const [dailyVerseDesignation, setDailyVerseDesignation] = useState()

  useEffect(() =>{
    fetchDailyVerse()
  }, [])

const fetchBible = () => {
  getBible()
  .then(data => setVerses(data));
}

const fetchDailyVerse = () => {
  getDailyVerse()
  .then(data => {
    setDailyVerseDesignation(data.data.passages[0].id);
    setDailyVerse(data.data.passages[0].content)

  })

}
    return(
      <main className='App'>
        <Title />
        <Form />
        <DailyVerse dailyVerse={ dailyVerse } dailyVerseDesignation= { dailyVerseDesignation } />
      </main>
    )
  }

export default App;
