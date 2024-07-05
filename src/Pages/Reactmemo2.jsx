import React from 'react'

const Reactmemo2 = ({data}) => {

    console.log("child component re-rendering");
    data()

  return (
    <div>
      
    </div>
  )
}

// export default Reactmemo2
export const Reactmemoized=React.memo(Reactmemo2)

