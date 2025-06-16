import React from 'react'
import ReplaysCard from '../../components/Home-Components/ReplaysCard'
import CustomerStats from '../../components/Home-Components/StatsCard'
import UsersTable from '../../components/Home-Components/UsersTable'
import StatsOverview from '../../components/Home-Components/StatsOverview'

function Home() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
      <ReplaysCard />
      <CustomerStats />
      <UsersTable />
      <StatsOverview />
    </div>
  )
}

export default Home