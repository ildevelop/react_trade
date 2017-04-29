/**
 * Created by Radu on 4/22/2017.
 */
/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {LineTooltip} from 'react-d3-tooltip';
import axios from 'axios';

class Chart extends React.Component {


    constructor() {
        super();
        this.state = {
            data: [],
            errorMessage: '',
            serverResponse: ''
        };
    }

    render(){
        let width = 700,
            height = 300,
            margins = {left: 100, right: 100, top: 50, bottom: 50},
            title = "User sample",
            // chart series,
            // field: is what field your data want to be selected
            // name: the name of the field that display in legend
            // color: what color is the line
            chartSeries = [
                {
                    field: 'BMI',
                    name: 'BMI',
                    color: '#ff7f0e'
                }
            ],
            // your x accessor
            x = function(d) {
                return d.index;
            };
        ReactDOM.render(
            <Chart
                title={title}
                width={width}
                height={height}
                margins= {margins}
            >
                <LineChart
                    margins= {margins}
                    title={title}
                    data={chartData}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    x={x}
                />
            </Chart>
            , document.getElementById('line-user')
        )
    }

}
export default Chart;