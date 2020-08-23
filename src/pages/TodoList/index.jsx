import React, { Component } from 'react'

import Content from '../../components/todo-list/Content'
import Footer from '../../components/todo-list/Footer'
import Header from '../../components/todo-list/Header'

class TodoList extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default TodoList
