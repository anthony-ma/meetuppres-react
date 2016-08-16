class App extends React.Component {
    state = {
        title: 'PARKMASTER 3001',
        lots: [
            {
                name: 'UPARK',
                address: '123 Park Ave., New York, NY 10010',
                phoneNumber: '1-800-YOU-PARK',
                manager: 'Bob Loblaw',
                spaces: [
                    {
                        number: 1,
                        occupied: false,
                        ticket: ''
                    },
                    {
                        number: 2,
                        occupied: true,
                        ticket: 'A00'
                    },
                    {
                        number: 3,
                        occupied: true,
                        ticket: '896'
                    },
                    {
                        number: 4,
                        occupied: true,
                        ticket: '250'
                    },
                    {
                        number: 5,
                        occupied: true,
                        ticket: 'P25'
                    }
                ]
            },
            {
                name: 'PARK \'N FLY',
                address: '1017 Airline Dr, Kenner, LA 70062',
                phoneNumber: '1-800-YOU-PARK',
                manager: 'Bob Loblaw',
                spaces: [
                    {
                        number: 1,
                        occupied: false,
                        ticket: ''
                    },
                    {
                        number: 2,
                        occupied: true,
                        ticket: 'A00'
                    },
                    {
                        number: 3,
                        occupied: true,
                        ticket: '896'
                    },
                    {
                        number: 4,
                        occupied: true,
                        ticket: '250'
                    },
                    {
                        number: 5,
                        occupied: true,
                        ticket: 'P25'
                    }
                ]
            }
        ]
    }

    render = () => {
        return (
            <div>
                <Header title={this.state.title} />
                {this.state.lots.map((lot) => <Lot key={lot.name} {...lot}/>)}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
