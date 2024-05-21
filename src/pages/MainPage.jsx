// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import ListComp from "../components/ListComp.jsx"
import DefaultLayout from "../layouts/DefaultLayout.jsx";

const MainPage = () => {


    return (
        <>
            <DefaultLayout>
                <ListComp/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;