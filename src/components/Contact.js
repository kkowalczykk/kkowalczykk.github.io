import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
`


const Contact = (props) => {
      useEffect(() => {
            props.updateTitle('Contact');

      })
      return (
            <Wrapper>

            </Wrapper>
      );
}

export default Contact;