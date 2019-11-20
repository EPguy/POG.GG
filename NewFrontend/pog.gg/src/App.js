import React from 'react';
import Index from './Page/index';
import Community from './Page/community';
import Summoner from './Page/Summoner';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Index}/>
      <Route path="/community" component={Community}/>
      <Route path="/summoner" component={Summoner}/>
    </>
  );
}

export default App;
