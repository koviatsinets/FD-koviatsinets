import './App.css';

import Filter from './components/Filter/Filter'

function App() {

  var arrWords = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

  return (
    <Filter words={arrWords}></Filter>
  );
}

export default App;
