import React from 'react'

const RestrictionList = (data) => {
    const restric = data.restric.map(v =>
    <li key={'restric_'+v.id}>{v.cont}</li>);
    return(
        restric
    )
}; 
export default RestrictionList;