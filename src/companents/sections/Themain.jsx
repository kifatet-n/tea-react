import React from 'react'
import MainImage from './main-image/MainImage'
import TeaInformation from './tea-information/TeaInformation'
import TeaCollections from './tea-collections/TeaCollections'
import Customerfeedback from './customer-feedback/Customerfeedback'
import TeaBlog from './tea-blog/TeaBlog'
import Information from './information/Information'
import Prioritise from './prioritise/Prioritise'


function Themain() {
  return (
    <main>
      <MainImage/>
      <TeaInformation/>
      <TeaCollections/>
      <Customerfeedback/>
      <TeaBlog/>
      <Information/>
      <Prioritise/>
    </main>
    

  )
}

export default Themain