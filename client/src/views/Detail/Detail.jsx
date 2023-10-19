import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { getDetail, loading, deleteGame } from '../../redux/actions'
import style from "./Detail.module.css"

const Detail = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const detailgame = useSelector((state) => state.detailgame)
  const isLoading = useSelector((state) => state.loading)
  const [swapImages, setSwapImages] = useState(false);
  
  const toggleImagen = () => {
    setSwapImages(!swapImages);
  };
  
  const navigate = useNavigate()

  const handleDelete = () =>{
    dispatch(deleteGame(id))
    if(handleDelete){
      alert("Eliminado con exito")
      navigate("/home")
    }
  }


  
  useEffect(() =>{
    dispatch(getDetail(id))
    dispatch(loading())
  }, [])
  


  
  
  return (
    <div>
        <NavLink to={"/home"}><button className={style.back}>Back</button></NavLink>
      <div className={style.container}>
        {isLoading ? (
          <div style={{color:"white", fontSize:"xx-large"}}>Loading...</div>
        ): ( 
          <>
            <div className={style.containerDetail} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${detailgame.image})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%", backdropFilter:"blur(10px)", backgroundAttachment:"fixed" }}>
              <div>
                <div className={style.idRating}>
                  {typeof detailgame.id === 'number' && <p>Id: {detailgame.id}</p>}
                  <p>Rating: {detailgame.rating}</p>
                </div>
                <div className={style.imagesContainer}>
                  <div className={style.mainImage}>
                    <img
                      src={swapImages ? detailgame.imageAditional : detailgame.image}
                      className={style.image}
                    />
                  </div>
                  {detailgame.imageAditional && (
                    <div>
                      <img
                        src={swapImages ? detailgame.image : detailgame.imageAditional}
                        className={style.secondaryImage}
                        onClick={toggleImagen}
                      />
                    </div>
                  )}
                </div>

                <h2 className={style.name}>{detailgame.name}</h2>
                <div className={style.genrePlatform}>
                  {detailgame.website && <a href={detailgame.website} target='blank'>{detailgame.website}</a>}
                  <div style={{display:"flex", gap:"100px"}}>
                    <div className={style.platforms}>
                      <h4>Platforms</h4>
                      {detailgame.platform && (
                        <p>
                          {Array.isArray(detailgame.platform) 
                          ? detailgame.platform.map((platf, index) => <li>{platf.name || platf}</li>)
                          : detailgame.platform.name || detailgame.platform}
                        </p>
                      ) }
                    </div>
                    <div className={style.genre}>
                        <h4>Genres</h4>
                        {detailgame.genres?.map((genre) => <li>{genre.name}</li>)}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{display:"flex", justifyContent:"end"}}>
                  {typeof detailgame.id != 'number' && <button onClick={() =>handleDelete(id)} className={style.delete}><svg viewBox="0 0 448 512" className={style.svgIcon}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>}
                </div>
                <div className={style.description}>
                  <p dangerouslySetInnerHTML={{ __html: detailgame.description }}/>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Detail