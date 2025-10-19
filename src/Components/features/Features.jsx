import React, { useState } from 'react'
import './Features.css'
import featuresArray from './featuresInfo'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Features() {

    const [featuresItems, setFeaturesItem] = useState(featuresArray)

    return (
        <div className='features'>
            {featuresItems.map(feature => (
                <div className='featureItem'>
                    <h3 className='featureTitle'>{feature.title}</h3>
                    <div className='featurePricesWrapper'>
                        <span className='featurePrice'>{feature.price}$</span>
                        <div className='frequencyWrapper'>
                            <span className='featureFrequency'>{feature.Frequency}</span>
                            <ArrowDownwardIcon className='featureIcon'/>
                        </div>
                    </div>
                    <span className='featureDesc'>{feature.desc}</span>
                </div>
            ))}
        </div>
    )
}
