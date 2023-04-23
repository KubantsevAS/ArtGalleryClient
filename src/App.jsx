import './App.css';
import { FilterMenu, Gallery, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <FilterMenu />
      <Gallery />
    </div>
  );
}

export default App;
