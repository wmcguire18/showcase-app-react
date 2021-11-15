//apikey c40ad1766e26de4770b073a61131a5b1

//bible reference 179568874c45066f-01

//the whole bible - https://api.scripture.api.bible/v1/bibles/179568874c45066f-01


const dailyVerseBank = [
  `JER.29.11`,
  `PSA.23`,
  `1COR.4.4-8`,
  `PHP.4.13`,
  `JHN.3.16`,
  `ROM.8.28`,
  `ISA.41.10`,
  `PSA.46.1`,
  `GAL.5.22-23`,
  `HEB.11.1`,
  `2TI.1.7`,
  `1COR.10.13`,
  `PRO.22.6`,
  `ISA.40.31`,
  `JOS.1.9`,
  `HEB.12.2`,
  `MAT.11.28`,
  `ROM.10.9-10`,
  `PHP.2.3-4`,
  `MAT.5.43-44`,
];

const dailyVerseIndex = Math.floor(Math.random() * dailyVerseBank.length);

const verseID = dailyVerseBank[dailyVerseIndex];


var getBibleHeaders = new Headers();
getBibleHeaders.append("api-key", "c40ad1766e26de4770b073a61131a5b1");

var requestOptions = {
  method: 'GET',
  headers: getBibleHeaders,
  redirect: 'follow'
};

export const getBible = () => {
 return fetch("https://api.scripture.api.bible/v1/bibles/179568874c45066f-01", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
};

export const getDailyVerse = () => {
  return fetch(`https://api.scripture.api.bible/v1/bibles/179568874c45066f-01/search?query=${verseID}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export const getSearchedVerse = ({ searchText }) => {
  return fetch(`https://api.scripture.api.bible/v1/bibles/179568874c45066f-01/search?query=${searchText}&offset=0`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}






// export const getPhotosForDay = (date) => {
//   return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getDateString(date)}&api_key=${process.env.REACT_APP_API_KEY}`)
// }
