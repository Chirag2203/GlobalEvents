import React from 'react'
import CategoryEventsNavbar from './CategoryEventsNavbar'
import SponsoredEventsSidebar from './SponsoredEventsSidebar'

const CategoryEvents = ({children}) => {
  return (
    <div className='min-h-screen'>
      <CategoryEventsNavbar/>
      <div className='flex  min-h-screen'>
        <div className='w-4/5'>
        {children}
        </div>
       <div className='w-1/5'>
       <SponsoredEventsSidebar/>
       </div>
      </div>
      
    </div>
  )
}

export default CategoryEvents
