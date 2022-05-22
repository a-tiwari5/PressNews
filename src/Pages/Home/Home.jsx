import React from 'react'
import Main from '../../components/Main/Main'
import Rightbar from '../../components/RIghtbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./home.scss"

const Home = (props) => {
  return (
    <div className='homeContainer d-flex'>
      <Sidebar />
      <Main searchResults={props.searchedTerm} />
      <Rightbar />
    </div>
  )
}

export default Home