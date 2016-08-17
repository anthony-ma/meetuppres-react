class Lot extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        address: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        manager: React.PropTypes.string.isRequired,
        phoneNumber: React.PropTypes.string.isRequired,
        spaces: React.PropTypes.array.isRequired,
        selectSpace: React.PropTypes.func.isRequired
    }

    selectSpace = (spaceId) => {
        this.props.selectSpace(this.props.id, spaceId);
    }

    render = () => (
        <div className='lot'>
          <button className='accordion-button'>toggle</button>
            <div className='lot-details'>
                <p className='lot-name'>{this.props.name}</p>
                <p className='lot-address'>{this.props.address}</p>
                <p className='lot-manager'>{this.props.manager}</p>
                <p className='lot-phone'>{this.props.phone}</p>
            </div>
            <div className='space-list'>
                {this.props.spaces.map((space) => <Space key={space.id} {...space} selectSpace={this.selectSpace} clearSpace={this.clearSpace} />)}
            </div>
        </div>
    )
}
