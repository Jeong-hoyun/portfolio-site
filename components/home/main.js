import Animation from "./animation";
import Link from 'next/link';

export default function Main() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                정호윤의 포트폴리오 사이트입니다
                <br className="hidden lg:inline-block"/>                
            </h1>
            <p className="mb-8 leading-relaxed">
            최근의 react 작업부터 후에는 과거 회사에서 작업한 PHP사이트도 올릴예정입니다. 언젠가는 풀스텍 개발자도 꿈꾸고 있으며 현재는 잘하는 프론트엔드를 목표로 하고있습니다~!
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
