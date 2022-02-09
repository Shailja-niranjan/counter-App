import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';  
import Counter from './src/Counter';

const App = (props) => {
   return (
   <Provider store= {store}>
     <Counter />
   </Provider>
   ); 
};
                  
export default App;                  