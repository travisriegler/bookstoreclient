import axios from 'axios';
import baseUrl from '../config';
import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';

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

  return (
    <Layout>
      <BookContainer />
    </Layout>
  )
}

export default App;