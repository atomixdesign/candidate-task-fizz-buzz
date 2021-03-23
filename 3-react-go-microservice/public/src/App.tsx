import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
        <form action="http://localhost:5000/api/fizzBuzz" method="POST">
            <label>
                Start:
                <input type="text" name="start" />
            </label>
            <label>
                End:
                <input type="text" name="end" />
            </label>
            <input type="submit" value="Calculate" />
        </form>
    </div>
  );
}

export default App;
