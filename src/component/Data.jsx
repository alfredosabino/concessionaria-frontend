import React from 'react'

export class Data extends React.Component {
    constructor() {
        super()

        var semanas = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo']
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        var data = new Date(),
            date = semanas[(data.getDay() - 1)]
                + ", " +
                data.getDate().toString().padStart(2, '0')
                + " " +
                meses[data.getMonth().toString()]
                + " " +
                data.getFullYear();

        this.state = {
            date: date
        }
    }

    render() {
        return (
            <div className="date">
                {this.state.date}
            </div>
        )
    }
}

export default Data