import React from 'react'

const ListItem = ({number = 0}: {number?: number}) => {
  const oldNumber = React.useRef(number)
  React.useEffect(() => {
    console.log({ number, oldNumber: oldNumber.current, x: Math.random() })
    oldNumber.current = number
  })
  return <div>List Item {`#${number}`}</div>
}

export default React.memo(ListItem)
