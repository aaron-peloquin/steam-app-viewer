import React from 'react'
import ListItem from './ListItem'

const List = () => {
  const [number, setNumber] = React.useState(1)
  const clicker = React.useCallback(() => {
    if (number === 1) { setNumber(2) }
    else { setNumber(1) }
  }, [number, setNumber])

  return <>
    <button onClick={clicker}>Click me</button>
    <ListItem number={number} />
    <ListItem number={2} />
    <ListItem number={number * 5} />
  </>
}

export default React.memo(List)
