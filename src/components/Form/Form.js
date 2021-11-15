import { useEffect, useState } from 'react';
import './Form.css'


const Form = ({ fetchSearchedVerse }) =>
{
  const [keyword, setKeyword] = useState("")

  const handleChange = (event) => {
    setKeyword(event.target.value)

  }

  return (
      <main>
          <form className="search-bar">
            <input
              type='text'
              placeholder='Search verse by keyword'
              name='input'
              value={ keyword }
              onChange={(event) => handleChange(event)}
            />
            </form>
            <div className="searchButtonArea">
            <button className="searchButton" onClick={() => {fetchSearchedVerse(keyword)}}>Search For Verses</button>
            </div>
          </main>
  )
}

export default Form;
