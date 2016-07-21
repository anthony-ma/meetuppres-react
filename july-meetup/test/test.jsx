class TestComponent extends React.Component {
    render = () => <span>Hi</span>;
}


class TestComponent2 extends React.Component {
    render = () => {
        return (
            <span>Hi</span>
        );
    }
}


ReactDOM.render(
    <TestComponent2 />,
    document.getElementById('app')
);
