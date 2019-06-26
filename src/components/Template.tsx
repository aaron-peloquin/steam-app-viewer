import React from 'react'
import ClassList from './ClassList'
import List from './List'

const Template = () => {
  return <>
    <ClassList />
    <List />
  </>
}

export default React.memo(Template)
