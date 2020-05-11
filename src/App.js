import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
		<div className="App">
			<header>
				<h1>Counter app using State/Hooks</h1>
			</header>
			<h2>Current value of count is {counter}</h2>
			<button onClick={() => setCounter(0)}>Reset Counter</button>
			<button onClick={() => counter >= 10? null: setCounter(counter + 1)}>Increase Counter</button>
			<button onClick={() => counter <= 0 ?null :setCounter(counter - 1)}>Decrease Counter</button>
		</div>
	);
}

export default App;
