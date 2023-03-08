import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser';
import Logo from '../../../components/shared/logo'
import Social, {SocialLink} from '../../../components/shared/social'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import MainMenu from '../../../components/menu/vertical-menu'
import MenuToggle from '../../../components/shared/menu-toggle';
import HamBurger from '../../../components/shared/ham-burger'
import {
    OveralySectionWrap,
    OverlayLeft,
    OverlayLeftTop,
    OveralyLogo,
    OverlayMap,
    MapBG,
    OverlayLeftBottom,
    OverlaySocial,
    OverlayQuickInfo,
    OverlayRight,
    OveralyMenu,
    MenuToggleWrapper
} from './overlay-section.stc'
 
const OverlaySection = ({
    quicInfoHeading, 
    quickInfoText, 
    quickInfoSpan, 
    socialStyle, 
    isOpen, 
    onClick}) => {

    const [socialBg, SetSocialBg] = useState('#001c43');
    const onHoverHandler = (e) => {
        SetSocialBg(e.target.dataset.bgcolor);
    }
    
    const siteQueryData = useStaticQuery(graphql `
        query overlaySiteDataQuery {
            site {
                siteMetadata {
                  contact {
                    address
                    social {
                      linkedin
                    }
                  }
                }
            }
            allMenuJson {
                edges {
                  node {
                    id
                    path
                    title
                  }
                }
            }
            file(relativePath: {eq: "images/map.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 576, maxHeight: 648, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
            }
        }      
    `);

    const {address, social: {linkedin}} = siteQueryData.site.siteMetadata.contact;
    const menuData = siteQueryData.allMenuJson.edges;
    const mapImg = siteQueryData.file.childImageSharp.fluid;
    return (
        <OveralySectionWrap className="ovl-menu-section" isOpen={isOpen}>
            <OverlayLeft>
                <OverlayLeftTop>
                    <OveralyLogo className="ovl-logo rn_surface">
                        <Logo/>
                    </OveralyLogo>
                    <OverlayMap className="ovl-map rn_surface">
                        <MapBG fluid={mapImg}/>
                    </OverlayMap>
                </OverlayLeftTop>
                <OverlayLeftBottom>
                    <OverlaySocial className="ovl-social rn_surface" style={{backgroundColor: socialBg}}>
                        <Social {...socialStyle}>
                            {linkedin && (
                                <SocialLink 
                                    data-bgcolor="#0077B5" 
                                    onMouseEnter={onHoverHandler} 
                                    path={linkedin}>Linkedin</SocialLink>
                            )}
                        </Social>
                    </OverlaySocial>
                    {address && (
                        <OverlayQuickInfo className="ovl-quick-info rn_surface">
                            <Heading {...quicInfoHeading}>Informations.</Heading>
                            <Text {...quickInfoText}>
                                <Text {...quickInfoSpan}>Adresse Postale :</Text>
                                {parse(address)}
                            </Text>
                        </OverlayQuickInfo>
                    )}
                </OverlayLeftBottom>
            </OverlayLeft>
            <OverlayRight className="ovl-right rn_surface">
                <MenuToggleWrapper className="menu">
                    <div className="hd-right text-right">
                        <MenuToggle className="menu-toggle" open onClick={onClick}>
                            <HamBurger open/>
                        </MenuToggle>
                    </div>
                </MenuToggleWrapper>
                <OveralyMenu>
                    <MainMenu menuArr={menuData}/>
                </OveralyMenu>
            </OverlayRight>
        </OveralySectionWrap>
    )
}

OverlaySection.propTypes = {
    quicInfoHeading: PropTypes.object,
    quickInfoText: PropTypes.object,
    quickInfoSpan: PropTypes.object
}

OverlaySection.defaultProps = {
    quicInfoHeading: {
        as: 'h3',
        color: '#fff',
        fontSize: '20px'
    },
    quickInfoText: {
        color: '#fff',
        opacity: 0.7,
        mb: 0
    },
    quickInfoSpan: {
        as: 'span',
        display: 'block'
    },
    socialStyle: {
        lineHeight: '40px',
        vertical: true
    }
}

export default OverlaySection;