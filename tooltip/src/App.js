import './App.css';

import Tooltip from './components/Tooltip/Tooltip'

function App() {

  const text = 'Hello!';
  const tooltip = <div>English</div>;
  const tooltip_time = 1000;

  return (
   <Tooltip tooltip={tooltip} time={tooltip_time}>{text}</Tooltip>
  );
}

export default App;
