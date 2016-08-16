class Lot extends React.Component {
    static propTypes = {
        address: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        manager: React.PropTypes.string.isRequired,
        phoneNumber: React.PropTypes.string.isRequired,
        spaces: React.PropTypes.array.isRequired
    }

    render = () => (
        <div>
            <div>
                <p>
                    {this.props.name}
                </p>
            </div>
            {this.props.spaces.map((space) => <Space key={space.number} {...space} />)}
        </div>
    )
}
