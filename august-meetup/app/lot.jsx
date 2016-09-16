class Lot extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        address: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        manager: React.PropTypes.string.isRequired,
        phoneNumber: React.PropTypes.string.isRequired,
        spaces: React.PropTypes.array.isRequired,
        occupySpace: React.PropTypes.func.isRequired,
        clearSpace: React.PropTypes.func.isRequired
    }

    state = {
        class: 'lot',
        open: false
    }

    occupySpace = (spaceId, ticket) => {
        this.props.occupySpace(this.props.id, spaceId, ticket);
    }

    clearSpace = (spaceId) => {
        this.props.clearSpace(this.props.id, spaceId);
    }

    handleClick = () => {
        if (this.state.open) {
            this.setState({open: false, class: "lot"});
        } else {
            this.setState({open: true, class: "lot open"});
        }
    }

    render = () => (
        <div className={this.state.class}>
            <button className='accordion-button' onClick={this.handleClick}>toggle</button>
            <div className='lot-details'>
                <p className='lot-name'>{this.props.name}</p>
                <p className='lot-address'>{this.props.address}</p>
                <p className='lot-manager'>{this.props.manager}</p>
                <p className='lot-phone'>{this.props.phoneNumber}</p>
            </div>
            <div className='space-list'>
                {this.props.spaces.map((space) => <Space key={space.id} {...space} occupySpace={this.occupySpace} clearSpace={this.clearSpace} />)}
            </div>
        </div>
    )
}
