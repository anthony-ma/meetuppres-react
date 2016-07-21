class PokeCard extends React.Component {
    state = {
        pokemon: [
            {
                number: '#001',
                name: 'Bulbasaur',
                image: 'http://placekitten.com/200/380',
                description: 'Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.',
            },
            {
                number: '#004',
                name: 'Charmander',
                image: 'http://placekitten.com/200/380',
                description: 'Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in both its upper and lower jaws and blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémons slender tail, and has blazed there since Charmanders birth. The flame can be used as an indication of Charmanders health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out.',
            },
            {
                number: '#007',
                name: 'Squirtle',
                image: 'http://placekitten.com/200/380',
                description: 'Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large brown eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves. Squirtles shell is a useful tool. It can withdraw into the shell for protection or for sleeping, and its grooved, rounded shape helps to reduce water resistance when this Pokémon swims. Squirtle can spray foamy water from its mouth with great accuracy. Squirtle is scarce in the wild, although it can be found around small ponds and lakes. The anime has shown that it can be found living on secluded islands with other members of its evolutionary line.'
            }
        ]
    }

    styles = {
        main: {
            position: 'relative',
            height: '100%',
            width: '100%'
        },
        centered: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            margin: 'auto'
        }
    }

    card = (pokemon) => {
        return (
            <div key={pokemon.number}>
                <div className={`card ${pokemon.name}`}>
                    <h2 className='header'>{pokemon.name}</h2>
                    <h3 className='subheader'>{pokemon.number}</h3>
                </div>
            </div>
        )
    }

    render = () => {
        return (
            <main style={this.styles.main}>
                <div style={this.styles.centered}>
                    {this.state.pokemon.map(this.card)}
                </div>
            </main>
        )
    }
}

ReactDOM.render(
    <PokeCard />,
    document.getElementById('app')
);
