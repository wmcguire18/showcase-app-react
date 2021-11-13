//apikey c40ad1766e26de4770b073a61131a5b1

//bible reference 179568874c45066f-01

//the whole bible - https://api.scripture.api.bible/v1/bibles/179568874c45066f-01


var myHeaders = new Headers();
myHeaders.append("api-key", "c40ad1766e26de4770b073a61131a5b1");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const getBible = () => {
 return fetch("https://api.scripture.api.bible/v1/bibles/179568874c45066f-01", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};








// export const getPhotosForDay = (date) => {
//   return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getDateString(date)}&api_key=${process.env.REACT_APP_API_KEY}`)
// }
