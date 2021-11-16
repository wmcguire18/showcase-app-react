import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({ searchedVerse }) => {
const [verse, setVerse] = useState()

const renderedSearchVerse = searchedVerse[0]

return (
<>
  <div className="search-verse-container">
  <h4>{ searchedVerse[0].reference } </h4>
    <h2>{ searchedVerse[0].text }</h2>
  </div>
  <Link to="/">
  <button className="home-button">Return Home</button>
  </Link>
</>

)

}
export default Result;
