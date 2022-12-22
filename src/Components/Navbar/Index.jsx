import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
function Index() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" class="link">Baş səhifə</Link>
            </li>
            <li>
                <Link to="/politics" class="link">Siyasət</Link>
            </li>
            <li>
                <Link to="/economy" class="link">İqtisadiyyat</Link>
            </li>
            <li>
                <Link to="/society" class="link">Cəmiyyət</Link>
            </li>
            <li>
                <Link to="/showbiz" class="link">Şou-biznes</Link>
            </li>
            <li>
                <Link to="/war" class="link">Müharibə</Link>
            </li>
            <li>
                <Link to="/sport" class="link">İdman</Link>
            </li>
            <li>
                <Link to="/criminal" class="link">Kriminal</Link>
            </li>
            <li>
                <Link to="/culture" class="link">Mədəniyyət</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Index