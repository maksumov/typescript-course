import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, Todo } from '../actions/index';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
export class _App extends Component<AppProps> {
  render() {
    return <div>Hi there</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
