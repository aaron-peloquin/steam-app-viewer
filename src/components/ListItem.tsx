import React, {memo, useEffect, useRef} from 'react'

const ListItem = ({
  debug,
  number = 0,
}: {
  debug: number,
  number?: number,
}) => {
  const oldNumber = useRef(number)
  useEffect(() => {
    // Can still check `previousProps`, but must be done only when needed
    console.log('useEffect', {
      cur: number,
      old: oldNumber.current,
    })
    // Update our prev prop
    oldNumber.current = number
  })

  return <div>List Item {`#${number}`}</div>
}

export default memo(ListItem)
