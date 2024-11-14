import NagivateBtn from "../components/tags/NagivateBtn";
import ExternalLinkBtn from "../components/tags/ExternalLinkBtn";
import useWeatherData from "../hooks/getWeatherData";
import { Header } from "../components/layout/Header";

const Home = () => {
    const { data: weatherData, error } = useWeatherData();
    const weatherNow = [];
    if (error) {
        console.log("Error:", error);
    } else if (weatherData) {
        weatherNow.push(weatherData.weather[0].main);
    } else {
        console.log("Loading...");
    }
    return (
        <>
            <figure>
                <Header weatherNow={weatherNow[0]} />
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
