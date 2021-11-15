import { useEffect, useState } from 'react';
import Form from './components/Form/Form.js';
import DailyVerse from './components/DailyVerse/DailyVerse.js';
import Title from './components/Title/Title';
import Result from './components/Result/Result.js';
import { Route, Routes } from 'react-router-dom';
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

    <Routes>
      <Route exact path="/" element={
        <div>
          <Title />
          <DailyVerse dailyVerse={ dailyVerse } dailyVerseDesignation= { dailyVerseDesignation }/>
          <Form fetchSearchedVerse={ fetchSearchedVerse }/>
        </div>
        }
      />

        <Route exact path="/result" element={
          <div>
            <Title />
            {searchedVerse.length > 0 ?
            <Result searchedVerse={ searchedVerse } /> : null}
          </div>
        }
      />
    }
    </Routes>
      </main>
    )
  }

export default App;
