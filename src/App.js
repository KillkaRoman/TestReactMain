import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;


function App() {

  useEffect( () => {
    tg.ready();
    }, [])
  

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
     12345
     <button onClick={onClose}> закрыть </button>
    </div>
  );
}

export default App;
