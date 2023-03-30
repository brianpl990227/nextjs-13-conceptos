import Link from "next/link"
import { MyRoutes } from "../interfaces/layout.interfaces"
import styles from './Navigation.module.css'

export default function NavigationComponent()
{
    const links: MyRoutes[] = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'About',
            route: '/about'
        },
        {
            label: 'Posts',
            route: 'posts'
        }

    ]

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({ label, route }) => {
                        return (
                            <li>
                                <Link href={route}>{label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )


}

