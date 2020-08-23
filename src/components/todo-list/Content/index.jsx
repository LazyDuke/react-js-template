import React, { Component } from 'react'

import classnames from 'classnames/bind'
import style from './style'

const cx = classnames.bind(style)
class Content extends Component {
  render() {
    console.log('Content render')
    return <div className={cx('content')}>This is content.</div>
  }
}

export default Content
