import React, {Component} from 'react'
import ClassListItem from './ClassListItem'

import someData from './data'

class ClassList extends Component {
  constructor (props: any) {
    super(props)
    this.clicker = this.clicker.bind(this)
  }

  state = {
    number: 1,
  }

  clicker () {
    if(this.state.number === 1) {
      this.setState({ number: 2 })
    } else {
      this.setState({ number: 1 })
    }
  }

  render () {
      return <>
      <h1>Class Components</h1>
      <button onClick={this.clicker}>Click me</button>
      {someData.map((k: number, v: number) => <ClassListItem debug={v} number={this.state.number} />)}
    </>
  }
}

export default ClassList
