import './App.css';
import TodoList from './Components/TodoList';
import MotivationalQuote from './Components/MotivationalQuote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MotivationalQuote/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
