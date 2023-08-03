import { UploadCsv } from './Components/UploadCsv';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Task</h1>
      <p>
        Pair of employees who have worked together on
        <br></br>common projects for the longest period of time
      </p>

      <UploadCsv />
    </>
  );
}

export default App;
