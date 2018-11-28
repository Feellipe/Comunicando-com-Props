import React from 'react'
import ReactDOM from 'react-dom'
import ApprovalCard from './AppovalCard/ApprovalCard';
import styled from 'styled-components';

const App = () => {
    return (
        <Wrapper>
        <div className="ui container comments">
            <ApprovalCard
                author="Florzinha"
                time="Tomorrow 5:59 PM"
                post="Subarashi"
            />            
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 20px 0 0; 
`;
// <Comments
// author="Florzinha"
// time="Tomorrow 5:59 PM"
// post="Subarashi"
// />
// <Comments
// author="Lindinha"
// time="Today 8:00 AM"
// post="Omawa"
// />
// <Comments
// author="Docinho"
// time="Today 8:33PM"
// post="Nani?!"
// />

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

