import {login, logout} from '../../services/firebase';
import styles from './Header.module.css'
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <header>
            <nav className={`${styles.nav}  grey darken-3`}>
              <div className={styles.away}>                   
                    <Link to="/" className={`main-buttons ${styles.homeButton}`}>
                        <button className={`btn light-green accent-4 waves-effect waves-light ${styles.button}`}>Home</button>
                    </Link>
                    <Link to="/upload">
                        <button className={`btn light-green accent-4 waves-effect waves-light ${styles.button}`}>Upload</button>
                    </Link>
                    <ul className={styles.ul}>
                        {
                            props.user ?
                            <>
                                <li className={`${styles.li} ${styles.welcome}`}>Welcome,&nbsp;&nbsp;{props.user.displayName} !</li>
                                <li className={`${styles.li} btn light-green accent-4 waves-effect waves-light ${styles.button}`}><Link to="/user/gallery" className={styles.black}>Personal Gallery</Link></li>
                                <li className={`${styles.li} btn light-green accent-4 waves-effect waves-light ${styles.button}`} onClick={logout}>LogOut</li>
                            </>
                            :
                            <>
                                <li className={`${styles.li} ${styles.welcome}`}>Login to access your personal gallery!</li>
                                    <button className={`btn light-green accent-4 waves-effect waves-light ${styles.button}`} onClick={login}>
                                        Login
                                    </button>
                            </>
                        }
                    </ul>
              </div>
            </nav>
        </header>
    )

}

export default Header;