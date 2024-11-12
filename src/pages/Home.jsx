// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import NagivateBtn from "../components/tags/NagivateBtn";
import ExternalLinkBtn from "../components/tags/ExternalLinkBtn";

const Home = () => {
    // const [data, setData] = useState(null);
    // const [geoData, setGeoData] = useState(null);
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((res) => {
    //         setGeoData(res);
    //     });
    // }, []);
    // useEffect(() => {
    //     if (!geoData) return;
    //     const API_KEY = "092f098a38964e7400dacffa2b6caf6f";
    //     let { latitude, longitude } = geoData.coords;
    //     latitude = Math.floor(latitude * 100) / 100;
    //     longitude = Math.floor(longitude * 100) / 100;
    //     const fetchUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(fetchUrl);
    //             if (!response.ok) {
    //                 throw new Error("네트워크 반응이 좋지 않음.");
    //             }
    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.log("err", error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    // console.log(data);
    return (
        <>
            <figure>
                <h1>1ruk@'s devlog</h1>
                <h2>이 사이트에 대해서.</h2>
                <p>
                    이 사이트는 포트폴리오 용으로 제작되었으며, CSS나
                    styled-components 없이 정상 작동되는 걸 목표로 하고
                    있습니다.
                </p>
                <br />
                <p>
                    추후, 작업물의 게시 및, til의 게재용으로 쓸 예정입니다.
                    실습을 위해 redux를 비롯한 간단한 auth 로직, supabase와
                    연계된 글, 댓글 게시 로직을 만들어보려고 합니다.
                </p>
            </figure>
            <figure>
                <h2>완성된 프로젝트를 보기</h2>
                <p>완성된 프로젝트 모음을 볼 수 있습니다.</p>
                <NagivateBtn
                    content={"완성된 프로젝트 모음"}
                    path={"/completed"}
                />
            </figure>
            <figure>
                <h2>TIL 보기.</h2>
                <p>하루에 한 번씩 업로드되는 til을 볼 수 있습니다.</p>
                <ExternalLinkBtn
                    content={"TIL 보기"}
                    url={"https://irukasdevblog.tistory.com/"}
                    
                />
            </figure>
        </>
    );
};
export default Home;
