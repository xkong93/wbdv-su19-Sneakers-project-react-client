import React, {Component} from 'react';
import {Pie} from "react-chartjs-2";

class PieBrandValueChartComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            brandPie: false,
            valuePie:false,
            chartData:{
                labels: this.props.brand,
                datasets:[
                    {
                        label: 'Brand',
                        data: this.props.brandValue,
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
                        data: nextProps.brandValue
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
        return backgroundArr;
    }

    render() {
        return (
            <div className="chart">
                <h4>Market Value by Brand</h4>
                <Pie
                    data={this.state.chartData}
                    width={251}
                    height={251}

                />
            </div>
        );
    }
}

export default PieBrandValueChartComponent;
