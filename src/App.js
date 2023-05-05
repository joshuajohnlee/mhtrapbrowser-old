import './my.css';
import './App.css';
import './responsive.css';
import Weapons from './components/Weapons.js';
import PageHeader from './components/PageHeader';
import WelcomeWindow from './components/WelcomeWindow';

function App() {
  return (
    <div className="App">

      <PageHeader />
      <WelcomeWindow />
      <Weapons />
    </div>
  );
}

export default App;
