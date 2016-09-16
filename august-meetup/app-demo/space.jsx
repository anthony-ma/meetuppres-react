class Space extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        occupied: React.PropTypes.bool.isRequired,
        number: React.PropTypes.number.isRequired,
        ticket: React.PropTypes.string.isRequired,
        occupySpace: React.PropTypes.func.isRequired,
        clearSpace: React.PropTypes.func.isRequired
    }

    occupySpace = () => {

    }

    clearSpace = () => {

    }

    render = () => (
        <div className={'space' + (this.props.occupied ? ' space-occupied-true' : '')}>
            <p className='space-number'></p>

        </div>
    )
}
