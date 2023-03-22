import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

  const { id } = useParams()

  useEffect(() => {
    console.log(id);
  }, [])


  return (
    <div>
      <header class="bg-white shadow">
          <h1 class="text-3xl -mt-4 py-4 px-4 font-bold tracking-tight text-gray-900">Dashboard</h1>
      </header>
    </div>
  )
}

export default Dashboard