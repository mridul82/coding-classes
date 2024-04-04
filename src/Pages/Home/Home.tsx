import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <React.Fragment >
        <Header />
        <div className="min-h-[70vh] text-2xl font-bold ">
            Home
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default Home