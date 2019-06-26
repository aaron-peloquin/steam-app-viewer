import React, {PureComponent} from 'react'

class ListItem extends PureComponent <{debug: number, number?: number}> {
  componentDidUpdate (prevProps: {debug: number, number?: number}) {
    console.log('componentDidUpdate', {
      cur: this.props.number,
      old: prevProps.number,
    })
  }

  componentDidMount () {
    console.log('componentDidMount', {
      cur: this.props.number,
      old: null,
    })
  }

  render () {
    return <div>List Item {`#${this.props.number}`}</div>
  }
}

export default ListItem
