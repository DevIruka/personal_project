import NagivateBtn from "../tags/NagivateBtn";
import ExternalLinkBtn from "../tags/ExternalLinkBtn";

const Header = () => {
    return (
        <figure>
            <h1>1ruk@'s devlog</h1>
            <table style={{ width: "100%" }}>
                <tr>
                    <td style={{ width: "30%", textAlign: "center" }}>
                        <NagivateBtn
                            content={"메인 화면으로 돌아가기"}
                            path={"/"}
                            width={"40%"}
                        />
                    </td>
                    <td style={{ width: "30%", textAlign: "center" }}>
                        <ExternalLinkBtn
                            content={"TIL 보기."}
                            url={"https://irukasdevblog.tistory.com/"}
                            width={"40%"}
                        />
                    </td>
                </tr>
            </table>
        </figure>
    );
};
export default Header;
