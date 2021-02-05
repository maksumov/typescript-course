import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

const App = (props: AppProps): JSX.Element => <div>{props.color}</div>;

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
