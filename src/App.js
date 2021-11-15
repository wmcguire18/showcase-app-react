import { useEffect, useState } from 'react';
import Form from './components/Form/Form.js';
import DailyVerse from './components/DailyVerse/DailyVerse.js';
import Title from './components/Title/Title';
import Result from './components/Result/Result.js';
import { getBible, getDailyVerse, getSearchedVerse } from './util/apiCalls.js';
import './App.css';

const App = () => {
  const [verses, setVerses] = useState([])
  const [dailyVerse, setDailyVerse] = useState()
  const [dailyVerseDesignation, setDailyVerseDesignation] = useState()
  const [searchedVerse, setSearchedVerse] = useState([])

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

const fetchSearchedVerse = (searchText) => {
  getSearchedVerse(searchText)
  .then(data => setSearchedVerse(data.data.verses))
}

    return(
      <main className='App'>
        <Title />
        <Form fetchSearchedVerse={ fetchSearchedVerse }/>
        <DailyVerse dailyVerse={ dailyVerse } dailyVerseDesignation= { dailyVerseDesignation } />
        {searchedVerse.length > 0 &&
        <Result searchedVerse={ searchedVerse } />
      }
      </main>
    )
  }

export default App;
