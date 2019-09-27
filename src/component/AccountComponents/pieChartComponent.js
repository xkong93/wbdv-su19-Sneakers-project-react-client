import React, {Component} from 'react';
import {Pie} from "react-chartjs-2";

class PieChartComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: this.props.brand,
                datasets:[
                    {
                        label: 'Brand',
                        data: this.props.brandCount,
                        backgroundColor: this.random_rgbaArray()

                    },

                ]


            }
        }
    }
    componentWillReceiveProps(nextProps){ // keypoint
        this.setState({
            chartData:{
                labels: nextProps.brand,
                datasets:[
                    {
                        label: 'Brand',
                        data: nextProps.brandCount
                    },

                ],

            }
        })
    }
    random_rgbaArray() {
        var o = Math.round, r = Math.random, s = 255;
        let backgroundArr = [];
        console.log(this.props.brand.length)
        for (let i = 0; i < this.props.brand.length; i++){
            var rgba = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.3 + ')';
            backgroundArr.push(rgba);
        }
        console.log(backgroundArr)
        return backgroundArr;
    }

    render() {
        return (
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    width={250}
                    height={250}
                    options={true}
                />
            </div>
        );
    }
}

export default PieChartComponent;
