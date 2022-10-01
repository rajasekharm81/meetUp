import React from 'react'

const Info = React.createContext({
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
})

export default Info
