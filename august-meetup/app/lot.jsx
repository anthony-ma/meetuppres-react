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
        <div>
            <div>
                <p>
                    {this.props.name}
                </p>
            </div>
            <div className='space-list'>
                {this.props.spaces.map((space) => <Space key={space.id} {...space} selectSpace={this.selectSpace} />)}
            </div>
        </div>
    )
}
