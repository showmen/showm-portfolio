import logo from './logo.svg';
import './App.css';
import './css/home.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="page-header">
        <h1 className='page-heading'>Home</h1>
      </div>
      <div className='page-body'>
        <section className='page-section'>
          <h3 className='section-title'>Javascript</h3>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-3 project-div'>
                <Link to="/Stopwatch">
                <div className='col-3 project-inner-div'></div>
                </Link>
              </div>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
            </div>
          </div>
        </section>
        <section className='page-section'>
          <h3 className='section-title'>React</h3>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
              <div className='col-3 project-div'>
                <div className='col-3 project-inner-div'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
