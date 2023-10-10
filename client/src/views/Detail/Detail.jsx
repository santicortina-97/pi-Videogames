import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { getDetail, loading } from '../../redux/actions'
import style from "./Detail.module.css"

const Detail = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const detailgame = useSelector((state) => state.detailgame)
  const isLoading = useSelector((state) => state.loading)
  //Remplazamos etiquetas html por espacio en la descripcion
  const description = detailgame.description?.replace(/<[^>]+>/g, '');

  
  useEffect(() =>{
    dispatch(getDetail(id))
    dispatch(loading())
  }, [])


  
  
  return (
    <div className={style.container}>
      {isLoading ? (
        <div>Cargando...</div>
      ): ( 
        <>
          <NavLink to={"/home"}><button>Back</button></NavLink>
          <img src={detailgame.image} className={style.image} />
          <h2>Name: {detailgame.name}</h2>
          <p>{description}</p>
    {/*       <p>{detailgame.platform?.map((plataf) => plataf.name)}</p> */}
    {/*       <p>{detailgame.platform}</p> */}
          <p>{detailgame.genres?.map((genre) => genre.name)}</p>
        </>
      )}
    </div>
  )
}

export default Detail