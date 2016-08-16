class SpaceListTest extends React.Component {
  state = {
      spaces: [
          {
              occupied: true,
              spaceNumber: 1,
              ticketNumber: 'X456AL1'
          },
          {
              occupied: false,
              spaceNumber: 2,
              ticketNumber: ''
          },
          {
              occupied: true,
              spaceNumber: 3,
              ticketNumber: 'D3534Z'
          }
      ]
  }

  render() {
      return (
          <SpaceList spaces={this.state.spaces} />
      )
  }
}

class SpaceList extends React.Component {

  spaceItem = (space) => {
      return (
        <Space key={space.spaceNumber} space={space} />
      )
  }

  render() {
      return (
          <div className='space-list'>
              {this.props.spaces.map(this.spaceItem)}
          </div>
      )
  }
}

ReactDOM.render(
    <SpaceListTest />,
    document.getElementById('space-test')
);
