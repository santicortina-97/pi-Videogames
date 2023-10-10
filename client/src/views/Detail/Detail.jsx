import React, { useEffect, useState } from 'react'
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
/*   const description = detailgame.description?.replace(/<[^>]+>/g, '');
 */  console.log(detailgame)
  console.log(detailgame.genres)

  const [swapImages, setSwapImages] = useState(false);

  const toggleImagen = () => {
    setSwapImages(!swapImages);
  };

/*   const imagenPrincipal = (
    <img
      src={detailgame.image}
      className={`${style.image} ${imagenAmpliada ? style.hidden : ''}`}
      onClick={toggleImagen}
    />
  );

  const imagenAditional = (
    <img
      src={detailgame.imageAditional}
      className={`${style.image} ${imagenAmpliada ? '' : style.hidden}`}
      onClick={toggleImagen}
    />
  ); */

  
  useEffect(() =>{
    dispatch(getDetail(id))
    dispatch(loading())
  }, [])
  


  
  
  return (
    <div>
        <NavLink to={"/home"}><button>Back</button></NavLink>
      <div className={style.container}>
        {isLoading ? (
          <div style={{color:"white"}}>Cargando...</div>
        ): ( 
          <>
            <div className={style.containerDetail} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${detailgame.image})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%", backdropFilter:"blur(10px)", backgroundAttachment:"fixed" }}>
              <div>
                <div className={style.idRating}>
                  <p>Id: {detailgame.id}</p>
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
                      {/* <p> */}{detailgame.genres?.map((genre) => <li>{genre.name}</li>)}{/* </p> */}
                  </div>
                </div>
              </div>
              <div className={style.description}>
                {/* <p >{description}</p> */}
                <p dangerouslySetInnerHTML={{ __html: detailgame.description }}/>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Detail