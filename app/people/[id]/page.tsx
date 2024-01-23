import React from 'react'

interface Props {
    params: {
        id: string;
    }
}

const PeopleDetailPage = ({params: {id}}: Props) => {
  return (
    <div>PeopleDetailPage: People Id: {id}</div>
  )
}

export default PeopleDetailPage