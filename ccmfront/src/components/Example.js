import React from 'react'

const Example = (data) => {
    const ioexam = data.ioexam.map(v =>
        <div className="ex_div" key={'ex_div'+v.id}>
        <h5>입출력 예시 {v.id}</h5>
        <ul>
          <li key={'input_'+v.id}>{v.input}</li>
          <li key={'output_'+v.id}>{v.output}</li>
        </ul> 
      </div>);
    return(
        ioexam
    )
}; 
export default Example;