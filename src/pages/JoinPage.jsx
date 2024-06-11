// eslint-disable-next-line no-unused-vars
import React from 'react';

import HomeDefaultLayout from "../layouts/HomeDefaultLayout.jsx";
import WelcomeImgComp from '../components/joinPage/WelcomeImgComp.jsx';
import JoinFormComp from '../components/joinPage/JoinFormComp.jsx';

const JoinPage = () => {
    return (
            <>
                <br/>
                <br/>
                <br/>
                <HomeDefaultLayout>
                    <WelcomeImgComp/>
                    <JoinFormComp/>
                </HomeDefaultLayout>
                <br/>
                <br/>
                <br/>
        </>
    );
};

export default JoinPage;