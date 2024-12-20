import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>i am child</h1>
        <h4>{props.name}</h4>
        {props.data.city}
        <br />
        {props.obj.num}
        {props.abc()}
    </div>
  )
}

export default Child