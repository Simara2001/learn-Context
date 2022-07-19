import React from 'react';
import {useGlobalContext} from '../context';

const Loading = () =>{
  const {loading, isError} = useGlobalContext();
  console.log(isError)
  const isLoading = loading ? 'loading...' : 'not loading...'
  const Error = loading ? 'isError...' : 'not isError...'
  return (
    <div>
      {isLoading}<br />
      {Error}
    </div>
  )
}
export default Loading