import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
// import {HandleApi} from './Handle';
import store from './store/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className=''>
        <Header />
          <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}
export default App
