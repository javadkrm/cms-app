import React from 'react'
import './Home.css'

import Features from '../../Components/features/Features'
import Chart from '../../Components/lineChart/LineChart'
import {datas} from '../../Datas';
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/WidgetLg/WidgetLg';


export default function Home() {
  return (
    <div className='home'>
      <Features/>
      <Chart title='Monthly Sale' data={datas} dataKey='sale' grid/>
      <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
      </div>
    </div>
  )
}
