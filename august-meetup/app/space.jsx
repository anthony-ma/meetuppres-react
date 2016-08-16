class Space extends React.Component {
    static propTypes = {
        occupied: React.PropTypes.bool.isRequired,
        number: React.PropTypes.number.isRequired,
        ticket: React.PropTypes.string.isRequired
    }

    render = () => <div>{this.props.number}</div>
}
