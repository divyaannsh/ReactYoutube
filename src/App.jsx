
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './components/utils/store';
function App() {


  return (
    <>
    <Provider store={store}>
  <div>
   <Head/>
   <Body/>

   {/**
    * 
    * Head
    * BOdy Sidebar
    * Menu Items
    * Main container
    * ButtonList
    * Video container
    *VdeoCard
    * 
    * 
    * 
    * 
    */}
   
   </div>
   </Provider>
    </>
  )
}

export default App
