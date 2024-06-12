import React from 'react'

function RainGauge({ litres }) {
  return (
    <div className='p-3'>
      <h4 className='text-center'>{litres} litros</h4>
      <div 
        className='progress'
        role='progressbar'
        aria-label='Basic example'
        aria-valuenow={litres}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <div className='progress-bar w-75'></div>
      </div>
    </div>
  )
}

export default RainGauge