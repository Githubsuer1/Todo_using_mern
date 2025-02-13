import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
// import {HandleApi} from './Handle';
import store from './store/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-600'>
        <Header />
        <h1 className='text-center mt-2 p-4 text-2xl sm:text-4xl font-bold'>To-do App</h1>
          <Outlet />
      </div>
    </Provider>
  )
}
export default App
