import styled from 'styled-components';
import { device } from '../../theme'

export const TestimonialWrap = styled.div`
    text-align: ${props => props.textAlign};
`;

export const Content = styled.div``;

export const ClientInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.small}{
        flex-direction: column;
    }
`;

export const ClientThumb = styled.figure`
    @media ${device.small}{
        margin-bottom: 5vw;
    }
    img{
        border-radius: 100%;
    }
`;

export const ClientDetails = styled.div`
    text-align: left;
    padding-left: 30px;
    @media ${device.small}{
        text-align: center;
        padding-left: 0;
    }
`;

export const StyledReview = styled.div`
	.gatsby-image-wrapper{
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
		@media ${device.small}{
			top: 12px;
		}
		@media ${device.xsmall}{
			top: 12px;
		}
	}
`;