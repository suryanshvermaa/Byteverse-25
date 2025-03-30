import OrganizerCard from '@/components/OrganizerCard'
import OrganizerCardList from '@/components/OrganizerCardList'
import TitleBar from '@/components/TitleBar'
import TitleSponser from '@/components/TitleSponser'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <TitleBar title={"Organisers"} side='right' />
      <OrganizerCardList />
      {/* <TitleSponser /> */}
    </div>
  )
}

export default Sponsors