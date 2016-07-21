class TestComponent extends React.Component {
    render = () => {
        return (
            <span>Hello World</span>
        );
    }
}

ReactDOM.render(
    <TestComponent />,
    document.getElementById('app')
);
