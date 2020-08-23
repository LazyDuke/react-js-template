import React, { Component } from 'react'

import classnames from 'classnames/bind'
import style from './style'

const cx = classnames.bind(style)
class Footer extends Component {
  render() {
    return <div className={cx('footer')}>This is footer.</div>
  }
}

export default Footer
