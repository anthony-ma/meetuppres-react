class App extends React.Component {
    state = {
        title: 'PARKMASTER 3001',
        lots: [
            {
                id: 1,
                name: 'UPARK',
                address: '123 Park Ave., New York, NY 10010',
                phoneNumber: '1-800-YOU-PARK',
                manager: 'Bob Loblaw',
                spaces: [
                    {
                        id: 11,
                        number: 1,
                        occupied: false,
                        ticket: ''
                    },
                    {
                        id: 12,
                        number: 2,
                        occupied: true,
                        ticket: 'A00'
                    },
                    {
                        id: 13,
                        number: 3,
                        occupied: true,
                        ticket: '896'
                    },
                    {
                        id: 14,
                        number: 4,
                        occupied: true,
                        ticket: '250'
                    },
                    {
                        id: 15,
                        number: 5,
                        occupied: true,
                        ticket: 'P25'
                    }
                ]
            },
            {
                id: 2,
                name: 'PARK \'N FLY',
                address: '1017 Airline Dr, Kenner, LA 70062',
                phoneNumber: '1-800-PARK-NFLY',
                manager: 'Harrison Ford',
                spaces: [
                    {
                        id: 21,
                        number: 1,
                        occupied: false,
                        ticket: ''
                    },
                    {
                        id: 22,
                        number: 2,
                        occupied: true,
                        ticket: 'B00'
                    },
                    {
                        id: 23,
                        number: 3,
                        occupied: true,
                        ticket: '643'
                    },
                    {
                        id: 24,
                        number: 4,
                        occupied: true,
                        ticket: 'X19'
                    },
                    {
                        id: 25,
                        number: 5,
                        occupied: true,
                        ticket: 'L90'
                    }
                ]
            }
        ]
    }

    selectSpace = (lotId, spaceId) => {
        console.log(lotId);
        console.log(spaceId);
    }

    render = () => {
        return (
            <div>
                <Header title={this.state.title} />
                {this.state.lots.map((lot) => <Lot key={lot.id} {...lot} selectSpace={this.selectSpace}/>)}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
