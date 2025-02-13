import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen'>
        {/* Fixed Navbar */}
        <Header className='fixed top-0 left-0 right-0 z-50' />
        <div className='pt-16'> {/* Add padding-top to account for the fixed navbar */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;