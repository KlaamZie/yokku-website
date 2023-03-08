import React from 'react';
import {Link} from 'gatsby';
import {FooterMenuWrap, FooterMenuList} from './footer-menu.stc'

const FooterMenu = () => {
    return (
        <FooterMenuWrap>
            <FooterMenuList>
                <Link to="/mentions-legales" className="no-cursor">Mentions Légales</Link>
            </FooterMenuList>
            {/*<FooterMenuList>*/}
            {/*    <Link to="/" className="no-cursor">Sitemap</Link>*/}
            {/*</FooterMenuList>*/}
            <FooterMenuList>
                <Link to="/contact" className="no-cursor">Contact</Link>
            </FooterMenuList>
        </FooterMenuWrap>
    )
}

export default FooterMenu;