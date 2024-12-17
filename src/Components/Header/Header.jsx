import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Header.css'

export function Header() {

    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url) {
            return "active";
        }
        return "";
    }

    return (
        <>
            <header>
                <div className='cabelhaco'>
                    <Logo />
                </div>
            </header>
        </>
    )
}

export default Header
