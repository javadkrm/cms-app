import React from 'react'
import Features from '../../Components/features/Features'
import Chart from '../../Components/lineChart/LineChart'
import './Home.css'
import datas from '../../Datas';


export default function Home() {
  return (
    <div className='home'>
      <Features/>
      <Chart title='Monthly Sale' data={datas} dataKey='sale' grid/>
    </div>
  )
}
