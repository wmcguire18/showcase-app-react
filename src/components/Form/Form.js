import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/result">
            <button className="search-button" onClick={() => {fetchSearchedVerse(keyword)}}>Submit Search</button>
            </Link>
            </div>
          </main>
  )
}

export default Form;
