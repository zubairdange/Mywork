import { createStore } from 'redux';
import { Provider } from 'react-redux';
export const store = createStore(counter);
return(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(‘root’)
   );