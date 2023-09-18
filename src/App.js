import axios from 'axios';
import baseUrl from './config'
import React, { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    axios(`${baseUrl}/api/v1/books`)
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => {
        //console.error(error);
      });
  }, []);

  return <div>My first component</div>
}

export default App;