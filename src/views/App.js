import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';

function App() {
// const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bắt đầu một loại mới 1
        </p>
        
        <Mycomponent />
        {/* <Mycomponent></Mycomponent> */}
      </header>
    </div>
  );
}

export default App;
