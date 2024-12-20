import React, { useState } from 'react'

const Event = () => {
  const [name, setName] = useState(null)
  const [option, setOption] = useState("")
  const [check, setCheck] = useState(false)

  function getData(e) {
    e.preventDefault()

    console.log(name)
    console.log(option)
    console.log(check)

  }

  return (
    <div>
      <form onSubmit={getData}>
        {/* {name} */}
        name:<input type='text' onChange={(e) => setName(e.target.value)} /> <br />

        <select onChange={(e)=>setOption(e.target.value)}>
          <option>one</option>
          <option>two</option>
          <option>tree</option>
        </select> <br />

        <input type='checkbox'  onChange={(e)=>setCheck(e.target.checked)}/>term & conditions <br />

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Event