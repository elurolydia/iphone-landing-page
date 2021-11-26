import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Phones from './components/Phones';
import ScreenSizeError from './components/PhoneScreenError';


function App() {
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

  if (isMobile){
    return (
      <div className="error_parent">
        <ScreenSizeError/>
      </div>
    );
  }
  return (
    <div>
      <Navbar/>
      <Main/>
      <Phones/>

    </div>
  );
}

export default App;
