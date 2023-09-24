import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';
import Login from './user/Login';
import { SnackbarProvider } from 'notistack'
import Auth from './auth';
import Register from './user/Register';

const App = () => {

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
          <Layout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={
                  <Auth>
                      <BookContainer />
                  </Auth>
                } />
            </Routes>
          </Layout> 
      </Router>
    </SnackbarProvider>
  )
}

export default App;