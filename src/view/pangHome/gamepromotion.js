import React, { useEffect } from 'react';
import '../pangHome/test.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Gamepromotion = () => {

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="d-dev">
                <div className="product-sub-category mgt45">
                    <div className="list">
                        <div className="vp-title addfont">โปรโมชั่นล่าสุด</div>
                        <a className="sub-promo">
                            <div className="sub-img"><img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/home/promo.png?v=27"
                                alt="promotions" /></div>
                            <div className="sub-title">
                                <h5 className='addfont'>โปรโมชั่น</h5>
                                <span className='addfont'>พบกับโปรโมชั่นมาก มายที่ห้ามพลาด!</span>
                            </div>
                        </a>
                    </div>
                    <div className="list">
                        <div className="vp-title addfont">โปรแกรมวีไอพี</div>
                        <a className="sub-vip">
                            <div className="sub-img"><img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/home/vip.png?v=27"
                                alt="vip" /></div>
                            <div className="sub-title">
                                <h5 className='addfont'>วีไอพี</h5>
                                <span className='addfont'>มาเป็น VIP เพื่อเพลิดเพลินกับสิทธิพิเศษระดับพรีเมียมของเรา</span>
                            </div>
                        </a>
                    </div>
                    <div className="list">
                        <div className="vp-title addfont">โปรแกรมในเครือ</div>
                        <a className="sub-aff">
                            <div className="sub-img"><img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/home/aff.png?v=27"
                                alt="aff" /></div>
                            <div className="sub-title">
                                <h5 className='addfont'>พันธมิตร</h5>
                                <span className='addfont'>เข้าร่วมตอนนี้เพื่อรับคอมมิชชั่นพิเศษ</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="chat-widget-container"></div>
            <div id="lineLoad" className="hide"></div>
            <div id="lineLoadOpt2" className="hide"></div>
        </>
    );
}

export default Gamepromotion;