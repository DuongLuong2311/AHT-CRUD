import styled from 'styled-components'
import {Link} from 'react-router-dom'
 

export const Links = styled(Link)`
    text-decoration: none;
    color: ${props => props.color};

    &:hover{
        color: ${props => props.color};
    }

`