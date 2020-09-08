import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import "./App.css"

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    // console.log(e.target)
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
    // console.log("jobs",jobs)


  return (
    <Container className="my-4">
      <h1 className="mb-4">招聘信息(GitHub平臺)</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>載入中...</h1>}
      {error && <h1>出大事了. 請重新刷新.</h1>}
      {jobs.map((job,idx) => {
        return <Job key={job.id} job={job} idx={idx}/>
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  )
}

export default App;
