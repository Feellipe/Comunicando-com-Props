import React from 'react';
import Button from './Button';
import Comments from '../Comment';
import styled from 'styled-components';


const ApprovalCard = props => (
    <Wrapper >
        <Content >
            {props.children}
        </Content>
  
        <ExtraContent >
            <div className="ui two buttons">
                <Button></Button>     
            </div>
        </ExtraContent>
    </Wrapper>
);

const ExtraContent = styled.div`
    max-width: 100%;
    min-height: 0!important;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    border-top: 1px solid rgba(0,0,0,.05)!important;
    position: static;
    background: 0 0;
    width: auto;
    margin: 0 0;
    padding: .75em 1em;
    top: 0;
    left: 0;
    color: rgba(0,0,0,.4);
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: color .1s ease;
    transition: color .1s ease;

`;

const Content = styled.div`
    flex-grow: 1;
    border: none;
    /* border-top: 1px solid rgba(34,36,38,.1); */
    background: 0 0;
    margin: 0;
    padding: 1em 1em;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 1em;
`;

const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin: 10px;
    border-radius: 3px;
    border: 1px solid lightgrey;
    flex-direction: column;
    max-width: 280px;
    padding: 3px;

`;


export default ApprovalCard;