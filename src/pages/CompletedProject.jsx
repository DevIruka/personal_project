import ExternalLinkBtn from "../components/tags/ExternalLinkBtn";

const CompletedProject = () => {
    return (
        <>
            <figure>
                <h2>포켓몬 도감 프로젝트.</h2>
                <img
                    src="/public/pokedex.png"
                    alt="프로젝트 사진"
                    width="400px"
                />
                <p>
                    react, redux를 이용하여 제작한 포켓몬 도감. 1세대에 존재하는
                    총 151마리의 넘버, 타입, 이름을 조회해볼 수 있습니다.
                </p>
                <ExternalLinkBtn
                    content={"완성된 페이지 보기"}
                    url={"https://pokedex-six-umber.vercel.app/"}
                    width={"30%"}
                />
                <ExternalLinkBtn
                    content={"github repository"}
                    url={"https://github.com/DevIruka/pokedex"}
                    width={"30%"}
                />
                <ExternalLinkBtn content={"상세 설명 보기"} width={"30%"} />
            </figure>
        </>
    );
};
export default CompletedProject;
