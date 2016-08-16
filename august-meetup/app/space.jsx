class Space extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        occupied: React.PropTypes.bool.isRequired,
        number: React.PropTypes.number.isRequired,
        ticket: React.PropTypes.string.isRequired
    }

    selectSpace = () => {
        this.props.selectSpace(this.props.id);
    }

    render = () => (
        <div className={'space ' + (this.props.occupied ? 'space-occupied-true' : '')} onClick={this.selectSpace}>
            <p>{this.props.number}</p>
            <p>{this.props.ticket}</p>
        </div>
    )
}
