import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'
import AddTodo from '../component/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'
import logo from '../resource/logo.svg';
import '../resource/App.css';
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
});
