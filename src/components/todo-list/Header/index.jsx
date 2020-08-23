import React, { Component } from 'react'

import classnames from 'classnames/bind'
import style from './style'

const cx = classnames.bind(style)
class Header extends Component {
  render() {
    return <div className={cx('header')}>This is header.</div>
  }
}

export default Header
