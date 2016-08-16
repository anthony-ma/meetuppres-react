class Header extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired
    }

    render = () => <div>{this.props.title}</div>
}
