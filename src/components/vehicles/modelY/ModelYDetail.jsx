import React from 'react'
import Header from '../../common/Header'
import ModelYPage from './ModelYPage'
import Safety from './Pages/Safety'
import Features from './Pages/Features'
import FeaturesDetail from './Pages/FeaturesDetail'

const ModelYDetail = () => {
  return (
    <>
        <section>
            <Header data={"rgb(46, 46, 46)"}/>
            <ModelYPage/>
            <Safety/>
            <Features/>
            <FeaturesDetail/>
        </section>
    </>
  )
}

export default ModelYDetail