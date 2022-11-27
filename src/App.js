import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'the-new-css-reset/css/reset.css';
import './App.css';
import { Commits } from './components/commits';
import { getCommits } from './features/commits/commitSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommits());
  }, []);

  return (
    <>
      <Commits />
    </>
  );
}

export default App;
