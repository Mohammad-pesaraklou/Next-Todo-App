// components
import Navbar from './Navbar';
// style
import styles from '../../styles/SideBar.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer>
                this is footer
            </footer>
        </div>
    );
};

export default Layout;