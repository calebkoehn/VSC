import React, { useState } from 'react';
import TabButton from './Button';
import TabContent from './Content';


const Tab = props => {
    const [ state, setState] = useState({selectedTab: 1});
    const tabOnClick = ( event, value) => {setState({selectedTab: value})};

    return (
        <div className='container'>
            <h1>A Very Cool Header.</h1> 
            {[1,2,3].map((val, index) => (<TabButton key={index} onClick={e => tabOnClick(e, val)} selected={state.selectedTab === val} >Tab {val}</TabButton>))}
            <TabContent>Tab {state.selectedTab} is currently showing. </TabContent>
        </div>
    )
}


export default Tab;