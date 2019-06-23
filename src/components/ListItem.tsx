import React from 'react'

const ListItem = ({number = 0}: {number?: number}) => {
  const oldNumber = React.useRef(number)
  React.useEffect(() => {
    // Can still check `previousProps`, but must be done only when needed
    console.log({ number, oldNumber: oldNumber.current })
    oldNumber.current = number
  })
  return <div>List Item {`#${number}`}</div>
}

export default React.memo(ListItem)
