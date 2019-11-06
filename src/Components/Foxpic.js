import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const FoxImage = styled.img`
    width: 350px;
    height: 436px;
    
`

export default class Foxpic extends React.Component {
    render() {
        return (
            <div>
                <FoxImage src="/images/foxpic.png" alt="Fox image"></FoxImage>
            </div>
        )
    }
} 