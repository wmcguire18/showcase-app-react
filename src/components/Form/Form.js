import { useEffect, useState } from 'react';
import './Form.css'


const Form = ({ setSearchedVerse }) =>
{

  return (
      <main>
          <form className="search-bar">
            <input
              type='text'
              placeholder='Search verse by keyword'
              name='input'
              onChange={this.props.handleChange}
            />
            </form>
            <div className="searchButtonArea">
            <button className="searchButton" onclick="searchButton()">Search For Verses</button>
            </div>
          </main>
  )
}

export default Form;
