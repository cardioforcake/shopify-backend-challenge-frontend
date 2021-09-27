import styles from './Home.module.css'
import {Link} from 'react-router-dom'

function Home(props){
  return(
    <div className={styles.homeContainer}>
      <Link to="/gallery">
        <button className="btn">Enter Gallery</button>
      </Link>
    </div>
  )
}

export default Home;