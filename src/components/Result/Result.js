import { useEffect, useState } from 'react';
import './Result.css';

const Result = ({ searchedVerse }) => {

const searchVerses = () => {
if(searchedVerse.length) {
  const searchedVerseIndex = Math.floor(Math.random() * searchedVerse.length);

  const verse = searchedVerse[searchedVerseIndex];
  return verse
}
}
console.log(searchVerses())



return (
<h1> Result </h1>

)

}
export default Result;
