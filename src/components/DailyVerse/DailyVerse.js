import { useEffect, useState } from 'react';
import './DailyVerse.css'

const DailyVerse = ({ dailyVerseDesignation, dailyVerse }) => {
  function createMarkup() {
  return {__html: `${dailyVerseDesignation}${dailyVerse}`}
}
function myComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

return(
  <div>
    <div className="subheader">
      <h2>Verse of the Day:</h2>
      <h3 id="viewing"><span id="verse">{myComponent()}</span></h3>
    </div>
    <div className="container">
      <div id="verse-content" className="verse-container"></div>
    </div>
    </div>
)
}

export default DailyVerse;
