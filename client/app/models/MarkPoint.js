import React from 'react'
import MarkerBox from '../components/MarkerBox'

class MarkPoint{
    
    constructor(index, onSelect){
        this.index = index
        this.point = null

        this.component = 
            (<MarkerBox
                index={index}
                point={point}
                onSelect={onSelect}
            />)
        
    }

}

export default MarkPoint