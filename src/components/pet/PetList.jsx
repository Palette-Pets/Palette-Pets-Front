import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import PetRegisterForm from "./PetRegisterForm.jsx";
import {useEffect, useState} from "react";
import {json, useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/system';
import "./../../styles/pet/slickArrows.css"
import {petListRequest} from "../../service/petApi.jsx";

const RoundedCardMedia = styled(CardMedia)({
    borderRadius: '50%',
    width: 150,
    height: 150,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 10,
});

const PetList = () => {

    const [petList, setPetList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // pet list query
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await petListRequest(1);
                console.log("data = " + data);
                if (data === 'REFRESH_TOKEN_EXPIRED_ERROR') {
                    window.location.replace('/login');
                } else {
                    setPetList(data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log('Failed to fetch data = ' + error);
                console.log(error);
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // 펫 등록 폼 -> 모달 처럼 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="slick-next"
                onClick={onClick}
            >
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="slick-prev"
                onClick={onClick}
            >
            </div>
        );
    };

    const settings = {
        dots: true,          // 캐러셀 밑에 ... 을 표시할지
        infinite: true,      // 슬라이드가 끝까지 가면 다시 처음으로 반복
        speed: 500,         // 속도
        autoplay: true,      // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도
        slidesToShow: 1,     // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,   // 한 번에 넘어가는 슬라이드 개수
        nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
        prevArrow: <PrevArrow />,
    };

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <>
            <h1>반려 동물 목록</h1>
            <Slider {...settings}>
                {
                    petList.map((pet) => (
                        <div key={pet.petId}>
                            <Card onClick={() => navigate(`/pet/details/${pet.petId}`)}>
                                <RoundedCardMedia component="img" height="200"
                                           image={"https://kr.object.ncloudstorage.com/palettepets/pet/" + pet.petImage} alt={pet.petName}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {pet.petName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {pet.petCategory1} - {pet.petCategory2}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        생일: {pet.petBirth}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        체중: {pet.petWeight}kg
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
            </Slider>
            <br />
            <br />
            <Button onClick={openModal}>펫 등록하기</Button>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <PetRegisterForm closeModal={closeModal} />
                    </div>
                </div>
            )}
        </>
    );
}

export default PetList;