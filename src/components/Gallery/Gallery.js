import styles from './Gallery.module.css';
import {useEffect, useState} from 'react';
import {toggleLiked, scrollLeft, scrollRight} from '../service-functions/service-functions'

// function toggleLiked(set, l, title){
//   window.localStorage.setItem(`image${title}`, l*-1);
//   set(prev=>prev*-1)
// }

// function scrollLeft(set){
//   set(prev=>prev-1)
// }

// function scrollRight(set){
//   set(prev=>prev+1)
// }

function Gallery(props){

  const [liked, setLiked] = useState(-1);

  useEffect(()=>{
    if(window.localStorage.getItem(`image${props.image['id']}`)==='1'){
      setLiked(1)
    }else{
      setLiked(-1)
    }
  },[props.image['id']])

  return(
    <div className={styles.galleryContainer}>
      <div className={styles.arrowContainer}>
        {props.currentImage >0?
          <div className={styles.arrowLeft} onClick={()=>{scrollLeft(props.setCurrentImage)}}></div>:
          <></>
        }
      </div>
      <div className={styles.card}>
        <div className={styles.interactionContainer}>

        </div>
        {props.image.url==="" ?
        <p className={styles.white}>No Image</p>:
        <img alt="pic of the day" src={props.image['url']} className={styles.image}></img>
        }
        <div className={styles.interactionContainer} id={styles.interactions}>
          <div className={styles.imageDesc}>
            <p className={styles.desc} id={styles.title}>{props.image['title']}</p>
            <p className={styles.desc}>{props.image['creator']}</p>
          </div>
          {liked === -1 ?
            <img alt="empty heart" src="/heartwhite.png" className={styles.heart} onClick={()=>toggleLiked(setLiked, liked, props.image['id'])}></img>:
            <img alt="empty heart" src="/heartfilled.png" className={styles.heart} onClick={()=>toggleLiked(setLiked, liked, props.image['id'])}></img>
          }
          {props.personal && props.user && props.image.url !== "" ?
            <form action={`https://image-repository-challenge.herokuapp.com/user/${props.user.uid}/delete/${props.image.id}`}>
              <input className={styles.delete} type="submit" value="DELETE"/>
            </form> :
            <></>
          }
        </div>
      </div>
      <div className={styles.arrowContainer}>
        {props.currentImage < props.gallerySizeMinusOne ?
          <div className={styles.arrowRight} onClick={()=>{scrollRight(props.setCurrentImage)}}></div>:
          <></>
        }
      </div>
    </div>
  )
}

export default Gallery;