import './App.css';
import React from 'react'
import data from './data';
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [currIndex, setCurrIndex] = React.useState(0);

  function fetchJobs() {
    try {
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  React.useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section>
      {/* <p>{JSON.stringify(jobs)}</p> */}
      <div className='btn-container'>
        {jobs.map((job, index) => {
          return <button key={job.id} onClick={() => setCurrIndex(index)}>{job.company}</button>
        })}
      </div>
      <div className='job-info'>
        <h2>{jobs[currIndex].title}</h2>
        <span className='company-title'>{jobs[currIndex].company}</span>
        <p>{jobs[currIndex].dates}</p>
        <div>
          {
            jobs[currIndex].duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}


export default App;
