import React from 'react'
import AllEventsNavbar from './AllEventsNavbar'
import SponsoredEventsSidebar from './SponsoredEventsSidebar'

const AllEventsConsole = ({children}) => {
  return (
    <div className='min-h-screen'>
      <AllEventsNavbar/>
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

export default AllEventsConsole
