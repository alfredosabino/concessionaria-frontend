import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

class Valuation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [
                    {
                        label: 'R$',
                        data: [
                            -3567.10,
                            8506.18,
                            20579.45,
                            32652.72,
                            45681.20
                        ],
                        borderColor: 'rgba(255, 99, 132, 1)'
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    }

    render() {
        return (
            <div id="chart">
                <Line
                    id="canvas"
                    class="chartjs-render-monitor"
                    data={this.state.data}
                    options={this.state.options}
                    series={this.state.series}
                    height={100}
                />
            </div>
        )
    }
}


export default Valuation