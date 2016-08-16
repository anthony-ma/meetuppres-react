class Space extends React.Component {

  render() {
      const space = this.props.space;
      return (
          <div className={'space ' + (space.occupied ? 'space-occupied-true' : '')} onClick={this.props.selectSpace}>
                <p>{space.spaceNumber}</p>
                <p>{space.ticketNumber}</p>
          </div>
      )
  }
}
