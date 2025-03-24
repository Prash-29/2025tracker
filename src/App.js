import './App.css';
import TodoList from './Components/TodoList';
import MotivationalQuote from './Components/MotivationalQuote';
import { Files } from './Components/fileQuestion.js/files';
import { InputDebounce } from './Components/debouncing';
import { OTP } from './Components/otp/otp';
import { XO } from './Components/xoxo';
import { Traffic } from './Components/trafficsignal';
import { Useref } from './Components/otp/useref';
import { Progress } from './Components/progressionbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <MotivationalQuote/>
        <TodoList/>
      </header> 
      <Files/>
      <InputDebounce/>
      <OTP inputLength = {4}/> 
      <XO/>
      <Traffic/>
      <Useref/>*/}
      <Progress/>
    </div>
  );
}

export default App;
