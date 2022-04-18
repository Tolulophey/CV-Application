import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {
  return (
    <div className="app">
      <GeneralInfo/>
      <EducationalExperience/>
      <PracticalExperience/>
    </div>
  );
}

export default App;
