
import './App.css';
import P from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

// actions.js
export const actions = {
  changeTitle: "chanegTitle"
} 

// data.js
const globalState = {
  title: "Title of context",
  body: 'body of context',
  counter: 0,
}

// reducer.js
export const reducer = (state, action) => {
  switch(action.type) {
    case actions.changeTitle: {
      return {...state, title: action.payload}
    }

    default: return {...state}
  }
}

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({children}) => {

  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => dispatch({type: actions.changeTitle, payload});

  return <Context.Provider value={{state, dispatch, changeTitle}}>{children}</Context.Provider>
};

AppContext.propTypes = {
  children: P.node,
}

// H1 / index.jsx

export const H1 = () => {
  const context = useContext(Context);

  return <h1 onClick={() => context.changeTitle(new Date().toLocaleString())}>{context.state.title}</h1>
}

function App() {

  return (
    <AppContext>
      <div>
        <H1/>
      </div>
    </AppContext>
  );
}

export default App;
