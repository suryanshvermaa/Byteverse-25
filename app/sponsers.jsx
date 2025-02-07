import OrganizerCard from '@/components/OrganizerCard'
import OrganizerCardList from '@/components/OrganizerCardList'
import TitleBar from '@/components/TitleBar'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TitleBar title={"Organisers"} side='right' />
      <OrganizerCardList />
    </div>
  )
}

export default Sponsors