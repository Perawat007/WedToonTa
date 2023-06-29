import * as React from 'react';
import axios from '../../api/axios';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';
import Typography from '@mui/material/Typography';
import { Box, Container, Pagination } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import PaginationJS from './Pagination';
function GamePlay() {
    const [items, setItems] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage, setPostsPerPage] = React.useState(18);
    const [GameValus, setValus] = React.useState(18);
    let valus = 0;

    const getMobileOperatingSystem = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "Unknown";
    };
    const mobileOS = getMobileOperatingSystem();
    
    React.useEffect(() => {
        DataGet();
    }, [])

    const DataGet = () => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        //console.log(pathSegments[2]);

        axios.get(`listGame/${pathSegments[1]}`)
            .then((response) => {
                if (response.data.data.data.games.length <= 20) {
                    setValus(1700)
                }
                else if (response.data.data.data.games.length >= 100 && pathSegments[1] !== 'YGGDRASIL') {
                    setValus(1200)
                } else if (pathSegments[1] === 'YGGDRASIL') {
                    setValus(1550)
                }
                setItems(response.data.data.data.games);
            })
            .catch(error => {
                console.log('error', error);
            });
    };
    const PlayGame = (codeGame) => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');

        axios.get(`seamlesslogIn/${codeGame}/${pathSegments[1]}`)
            .then((response) => {
                const link = response.data.data.data.url;
                if (mobileOS === 'Android') {
                    window.open(link);
                } else {
                    window.open(link, "_self");
                }

            })
            .catch(error => {
                console.log('error', error);
            });
    }

    const BackPang = () => {
        window.location.href = `/`;
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = items.slice(firstPostIndex, lastPostIndex);
    const h4Style = {
        color: 'green',
        display: 'inline-block',
        cursor: 'pointer',
        marginRight: '10px',
    };


    return (
        <>
            <React.Fragment>
                <Container maxWidth="xl" sx={{ p: 2 }}>
                    <Box display={'flex'}>
                        <Box flexGrow={1} sx={{
                            width: 2,
                            height: '180px',
                            '@media (max-width: 414px)': {
                                height: GameValus + 150,
                            },
                            '@media (max-width: 390px)': {
                                height: GameValus + 180,
                            },
                            '@media (max-width: 375px)': {
                                height: GameValus + 150,
                            },
                            '@media (min-width: 428px)': {
                                height: GameValus + 100,
                            },
                            '@media (min-width: 1280px)': {
                                height: 800,
                            },
                        }}>

                        </Box>
                        <Typography variant="h6">
                            <a style={h4Style} onClick={BackPang}>ย้อนกลับ</a>
                        </Typography>
                    </Box>
                    <div className="card-font">รายชื่อเกม</div>
                    <br />
                    <div className="game-container game vGameList">
                        <div className="list">
                            {currentPosts.map((row) => (
                                <div key={row.name} className="box">
                                    <div className="card-image"
                                        role="img" alt="" style={{
                                            backgroundImage: `url(${row.img})`,
                                            transform: "scale(1)"
                                        }}>
                                    </div>
                                    <img src={row.img} alt='' style={{
                                        cursor: 'pointer',
                                    }} />
                                    <span className="name">
                                        <span>{row.name}</span>
                                    </span>
                                    <div className="provider-name">{row.name}</div>
                                    <div className="box-play">
                                        <div className="button-play boxGoPlay" data-gameid={row.providerCode} data-name={row.name}
                                            data-pid="191" onClick={() => PlayGame(row.code)}>เล่น</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </React.Fragment>
            <PaginationJS
                totalPosts={items.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    );
}


export default GamePlay;