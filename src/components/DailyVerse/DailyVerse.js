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
  <body>
    <div class="subheader">
      <h2>Verse of the Day:</h2>
      <h3 id="viewing"><span id="verse">{myComponent()}</span></h3>
    </div>
    <main class="container">
      <div id="verse-content" class="verse-container"></div>
    </main>
  </body>
)
}

export default DailyVerse;
