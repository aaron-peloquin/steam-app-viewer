import React, {memo, useCallback, useState} from 'react'
import ListItem from './ListItem'

import someData from './data'

const List = () => {
  const [number, setNumber] = useState(1)
  const clicker = useCallback(() => {
    if (number === 1) { setNumber(2) }
    else { setNumber(1) }
  }, [number, setNumber])
console.log({ someData })
  return <>
    <h1>Functional Components</h1>
    <button onClick={clicker}>Click me</button>
    {someData.map((k: number, v: number) => {
      console.log('aaaaa')
      return <ListItem debug={v} number={number} />
    })}
  </>
}

export default memo(List)
