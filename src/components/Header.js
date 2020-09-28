import React, { useEffect } from 'react';
import Typical from 'react-typical';
import styled from 'styled-components';

const Title = styled(Typical)`
      font-size: 1.6em;
      color: rgb(68,12,115);
      font-family: 'Nunito', sans-serif !important;
      padding-left: 10px;
      padding-right: 10px;
      @media screen and (min-width: 768px){
            font-size: 1.9em;
      }
`

const Header = (props) => {
      let title = props.title;

      return (
            <Title steps={[`<${title}/>`]} />
      );
}

export default Header;