import React from 'react'

const Loading = ({spinner, color}) => {
  return (
    <div className="text-center p-5">
    <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Cargando...</span>
    </div>
</div>
 )
}

export default Loading;