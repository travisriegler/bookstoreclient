import axios from 'axios';
import baseUrl from './config'

const App = () => {

  axios(`${baseUrl}/api/v1/books`).then(books => {
    console.log(books);
  })

  return <div>My first component</div>
}

export default App;