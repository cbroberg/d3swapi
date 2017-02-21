import React, { Component } from 'react';
import 'isomorphic-fetch'
import Link from 'next/link'
import Foo from './display'

export default class Welcome extends React.Component {

  render () {
      return (
        <div>
            <h1>Hello world from Welcome Component</h1>
            <Foo />
        </div>
      )
  }
}

// export default () => (
//   <div>Welcome to next.js!</div>
// )
