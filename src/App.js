import './App.css';
import crud from './config/crud';

function App() {

  const addRegister = () => {

    const savedData = {
 born: 2000, last: 'Carvalho', first: 'Bruno' 
    }

    crud.save("users", savedData)
      .then(user => {
        console.log('USER:', user);
      })
      .catch(err => {
        console.log('ERR:', err);
      })
  }

  return (
    <div className="App">
      <button
        onClick={addRegister}
      >
        Add
      </button>
    </div>
  );
}

export default App;
