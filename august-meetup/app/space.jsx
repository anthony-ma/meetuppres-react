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
      const newTicket = this.refs.newTicket.value;
      this.props.occupySpace(this.props.id, newTicket);
    }

    clearSpace = () => {
      this.props.clearSpace(this.props.id);
    }

    render = () => (
        <div className={'space' + (this.props.occupied ? ' space-occupied-true' : '')}>
            <p className='space-number'>{this.props.number}</p>

            {/*bad thing about react, only one top level element returned*/}
            {this.props.occupied &&
              <p className='space-ticket-number'>
                {this.props.ticket}
              </p>

            }
            {this.props.occupied &&
                <button type='button' onClick={this.clearSpace} />
            }
            {/*bad thing about react, only one top level element returned*/}
            {!this.props.occupied &&
              <p className='space-ticket-number'>
                <input type='text' ref="newTicket" />
              </p>
            }
            {!this.props.occupied &&
                <button type='button' onClick={this.occupySpace} />
            }

        </div>
    )
}
