import Link from 'next/link';
// style
import styles from '../../styles/SideBar.module.scss'
// icons
import { VscListSelection, VscSignIn } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import { BiMessageSquareAdd } from "react-icons/bi";
import Header from './header';

const Layout = ({ children }) => {

    return (
        <div className={styles.mainContainer}>
            <Header />
            <div className="container--main">
                <aside>
                    <p>Welcome 👋</p>
                    <ul>
                        <li>
                            <VscListSelection />
                            <Link href="/">Todos</Link>
                        </li>
                        <li>
                            <BiMessageSquareAdd />
                            <Link href="/addTodo">Add Todo</Link>
                        </li>
                        <li>
                            <RxDashboard />
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </aside>
                <section>{children}</section>
            </div>
            <footer>
                this is footer
            </footer>
        </div>
    );
};

export default Layout;