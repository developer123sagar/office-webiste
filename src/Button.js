import React, { useState } from 'react'

const Button = ({name, count}) => {

    const [number, setNuber] = useState(2);
    const increment = () => {
        setNuber(number + 1);
        count(number)
      };
  return (
    <div>
            <button onClick={increment}>{name}</button>
    </div>
  )
}

export default Button