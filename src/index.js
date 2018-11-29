import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './AppovalCard/ApprovalCard';
import styled from 'styled-components';
import Comments from './Comment';


const App = () => {
    return (
        <Wrapper>
            <div className="ui container comments">       

            <ApprovalCard>
                <Comments
                    author="Florzinha"
                    time="Tomorrow 5:59 PM"
                    post="Subarashi"
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comments
                    author="Lindinha"
                    time="Today 8:00 AM"
                    post="Omawa"
                    />
            </ApprovalCard>

            <ApprovalCard>
            <Comments
                author="Docinho"
                time="Today 8:33PM"
                post="Nani?!"
            />
            </ApprovalCard>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 20px 0 0; 
`;

{/* <ApprovalCard
author="Florzinha"
time="Tomorrow 5:59 PM"
post="Subarashi"
/>

<ApprovalCard
author="Florzinha"
time="Today 8:00 AM"
post="Omawa"
/>     

<ApprovalCard
author="Florzinha"
time="Tomorrow 8:33 PM"
post="Nani"
/>   */}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

