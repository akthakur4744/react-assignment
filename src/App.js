import React from 'react';
import { Container} from 'reactstrap';

import './App.css';
import Router from './components/router/router';


const App = () => {
  return (
    <Container className='App'>
      <Router />
    </Container>
  );
}

export default App;
