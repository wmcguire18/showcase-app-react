import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({ searchedVerse }) => {
const [verse, setVerse] = useState()

//   const searchVerses = () => {
//     if(searchedVerse.length) {
//       const searchedVerseIndex = Math.floor(Math.random() * searchedVerse.length);
//
//       const resultVerse = searchedVerse[searchedVerseIndex];
//       setVerse(resultVerse)
// }
// }

const renderedSearchVerse = searchedVerse[0]

return (
<>
  <div className="search-verse-container">
  <h4>{ searchedVerse[0].reference } </h4>
    <h2>{ searchedVerse[0].text }</h2>
  </div>
  <Link to="/">
  <button className="homeButton">Return Home</button>
  </Link>
</>

)

}
export default Result;
