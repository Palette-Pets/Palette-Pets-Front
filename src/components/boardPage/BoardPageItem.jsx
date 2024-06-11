import React, { useEffect, useState } from 'react';
import "../../styles/board/BoardItem.css"
import { Chip, CssBaseline } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/system';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const BoardPageItem = (articles) => {
    const { article } = articles
    const { title, content, articleHead, articleId, articleTags, boardName, countLoves, countViews, countReview, createdAt,memberNickname } = article
    const [formattedDateTime, setFormattedDateTime] = useState('');
    console.log(articles)
    const dateTime = new Date(createdAt);
    const nowTime = new Date();

    useEffect(() => {
        let time = "";
        if (dateTime.getDate !== nowTime.getDate) {
            time = `${dateTime.getFullYear()}.${(dateTime.getMonth() + 1).toString().padStart(2, '0')}.${dateTime.getDate().toString().padStart(2, '0')} 
                                  ${dateTime.getHours().toString().padStart(2, '0')}시
                                  ${dateTime.getMinutes().toString().padStart(2, '0')}분`;
        }
        else {
            time = `${dateTime.getFullYear()}.${(dateTime.getMonth() + 1).toString().padStart(2, '0')}.${dateTime.getDate().toString().padStart(2, '0')} `;
        }

        // 연.월.일 시 분 형식으로 포맷
        setFormattedDateTime(time);
    }, [])

    const navigate = useNavigate();

    //글 클릭시 navigate
    const articlePage = () => {
        navigate(`/article/view/${articleId}`)
    }


    return (
        <>
            <div className="Item-container" onClick={articlePage}>
                <div className="Item-content">
                    <div className="Item-text">
                        <Stack direction="row" spacing={1} >
                            <Chip label={articleHead} variant="outlined" />
                        </Stack>
                        <div className="Item-title">{title}</div>
                        <div className="Item-info">
                            {memberNickname}  &emsp; {formattedDateTime}
                            <span className='Item-icon'>
                                <FavoriteBorderIcon sx={{fontSize:'16pt'}}/>

                            </span>
                            &nbsp; {countLoves}
                            <span className='Item-icon'>
                                <TvIcon sx={{fontSize:'16pt'}} />

                            </span>
                            &nbsp; {countViews}
                            <span className='Item-icon'>
                                <ChatBubbleOutlineIcon sx={{fontSize:'16pt'}} />

                            </span>
                            &nbsp;  {countReview}

                        </div>
                        {
                            articleTags && <div className="Item-tags">#{articleTags}</div>
                        }

                    </div>
                    <div className="Item-image">사진</div>
                </div>

            </div>
            <hr />
        </>
    );
};

export default BoardPageItem;