class Space extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        occupied: React.PropTypes.bool.isRequired,
        number: React.PropTypes.number.isRequired,
        ticket: React.PropTypes.string.isRequired
    }

    occupySpace = () => {
      debugger;
      const newTicket = this.refs.newTicket.value;
      this.props.occupySpace(this.props.id, newTicket);
    }

    clearSpace = () => {
      this.props.clearSpace(this.props.id);
    }

    render = () => (
        <div className={'space' + (this.props.occupied ? ' space-occupied-true' : '')}>
            <p className='space-number'>{this.props.number}</p>

            {this.props.occupied &&
              <p className='space-ticket-number'>
                {this.props.ticket}
                <button type='button' className='space-occupy-button' onClick={this.clearSpace} />
              </p>
            }

            {!this.props.occupied &&
              <p className='space-ticket-number'>
                <input type='text' ref="newTicket" />
                <button type='button' className='space-clear-button' onClick={this.occupySpace} />
              </p>
            }

        </div>
    )
}
