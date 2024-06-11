
import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useCallback} from "react";
import Box from "@mui/material/Box";
import CommentResisterForm from "../../components/comment/CommentResisterForm.jsx";
import CommentList from "../../components/comment/CommentList.jsx";


const TestPage = () => {


    return (
        <>
            <DefaultLayout>
                <>
                   <CommentList/>
                </>
            </DefaultLayout>
        </>
    )
}

export default TestPage;