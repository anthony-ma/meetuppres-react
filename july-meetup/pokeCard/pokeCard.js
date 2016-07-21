'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokeCard = function (_React$Component) {
    _inherits(PokeCard, _React$Component);

    function PokeCard() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, PokeCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PokeCard)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            pokemon: [{
                number: '#001',
                name: 'Bulbasaur',
                image: 'http://placekitten.com/200/380',
                description: 'Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.'
            }, {
                number: '#004',
                name: 'Charmander',
                image: 'http://placekitten.com/200/380',
                description: 'Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in both its upper and lower jaws and blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémons slender tail, and has blazed there since Charmanders birth. The flame can be used as an indication of Charmanders health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out.'
            }, {
                number: '#007',
                name: 'Squirtle',
                image: 'http://placekitten.com/200/380',
                description: 'Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large brown eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves. Squirtles shell is a useful tool. It can withdraw into the shell for protection or for sleeping, and its grooved, rounded shape helps to reduce water resistance when this Pokémon swims. Squirtle can spray foamy water from its mouth with great accuracy. Squirtle is scarce in the wild, although it can be found around small ponds and lakes. The anime has shown that it can be found living on secluded islands with other members of its evolutionary line.'
            }]
        }, _this.styles = {
            main: {
                position: 'relative',
                height: '100%',
                width: '100%'
            },
            centered: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }
        }, _this.card = function (pokemon) {
            return React.createElement(
                'div',
                { key: pokemon.number, className: 'col-md-4' },
                React.createElement(
                    'span',
                    null,
                    pokemon.name
                )
            );
        }, _this.render = function () {
            return React.createElement(
                'main',
                { style: _this.styles.main },
                React.createElement(
                    'div',
                    { style: _this.styles.centered, className: 'row' },
                    _this.state.pokemon.map(_this.card)
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PokeCard;
}(React.Component);

ReactDOM.render(React.createElement(PokeCard, null), document.getElementById('app'));