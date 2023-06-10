import React from 'react';
import Header from '../components/Header';
import ForceGraph from '../components/graph';
import Data from '../components/data.json';

const App = () => {
  return (
    <div>
      <Header />
      <div className='graphpage'>
      <ForceGraph nodes={Data.nodes} links={Data.links} /></div>
    </div>
  );
};

export default App;
