import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './componens/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      {/* <Navbar /> */}
      <div className='container'>
        <h1>Counter App</h1>
        <h2>Useing React & Redux</h2>
        currently count is {count}<br></br>
        <button onClick={() => dispatch(decrement())}>+</button>
        <button onClick={() => dispatch(increment())}>-</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      
     </div>

    </>
  );
}

export default App;
