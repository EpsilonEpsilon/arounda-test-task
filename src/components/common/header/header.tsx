import styles from "./header.module.scss";
import logo from "@/../public/assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Routes from "@/lib/routes";
import {getServerSideAuthStateHelper, removeServersideCookie} from "@/shared/utils";
import {HeaderSearchInput} from "@/components/common";
import LogoutButton from "@/components/common/header/logout-btn";


const Header = async ()=>{
    const isAuth = await getServerSideAuthStateHelper();
    return (
        <header className={styles["header"]}>
            <nav className={styles["navbar"]}>
                <Link href={Routes.Initial}><Image priority src={logo} alt={"logo"}/></Link>
                <HeaderSearchInput/>
                {!isAuth && <Link className = {styles["link"]} href={Routes.Login}>Log in</Link>}
                {isAuth && <LogoutButton/>}

            </nav>
        </header>
    )
}

export default Header;
