import React, { Fragment, useState } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer, VictoryLegend } from 'victory'
import { func, getPoints } from './functions'
import { TextField } from '@material-ui/core'

function Chart() {
    const [ value, setValue ] = useState(0)
    const arrayOfJ = []

    for (let i = 0; i < 30; i++) {
        arrayOfJ[i] = i
    }

    return (<Fragment>
        <TextField id="outlined-basic" label="Значение j" variant="outlined" autoFocus onChange={ event => {
            setValue(parseInt(event.target.value))
        } }/>
        <VictoryChart
            maxDomain={ { x: 2, y: 1.5 } }
            minDomain={ { x: -0.5, y: -0.5 } }
            theme={ VictoryTheme.material }
            containerComponent={ <VictoryContainer responsive={ false }/> }
            width={ 800 }
            height={ 800 }>
            <VictoryLegend x={ 200 } y={ 50 }
                           orientation="horizontal"
                           gutter={ 20 }
                           itemsPerRow={ 2 }
                           data={ [ {
                               name: 'График функции', symbol: { fill: '#d00f50' }, labels: { fill: '#d00f50' }
                           }, {
                               name: 'График u со значением j из поля', symbol: { fill: 'black' }, labels: { fill: 'black' }
                           },{
                               name: 'Графики u при j от 0 до 30', symbol: { fill: 'blue' }, labels: { fill: 'blue' }
                           } ] }
            />
            <VictoryLine data={ func }
                         animate={ { duration: 1500 } }
                         style={ {
                             data: {
                                 stroke: '#d00f50'
                             }
                         } }/>
            {arrayOfJ.map((item) => (<VictoryLine data={ getPoints(item) }
                                                   animate={ { duration: 1500 } }
                                                   style={ {
                                                       data: {
                                                           stroke: 'blue'
                                                       }
                                                   } }/>)) }
            <VictoryLine data={ getPoints(value) }
                         animate={ { duration: 1500 } }
                         style={ {
                             data: {
                                 stroke: 'black'
                             }
                         } }/>
        </VictoryChart>
    </Fragment>)
}

export default Chart