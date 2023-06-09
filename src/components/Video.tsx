import { Player, Youtube, DefaultUi } from "@vime/react";
import { CaretRight, CodesandboxLogo, FileArrowDown, WhatsappLogo } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";


import '@vime/core/themes/Default.css';

const GET_LESSONS_BY_SLUG_QUERY = gql`
query GetLessonBySlug ($slug: String){
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
        teacher {
      bio
      avatarURL
      name
        }
      }
  }
  
`
interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {

    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSONS_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug
        }
    })

    console.log(data);

    if (!data) {
        return (
            <div className="flex-1">
                <p>Carregando Video ...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex-justify-center">
                <div className="rounded-full justify h-full w-full max-w-[1500px] max-h-[30vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="bg-gray-700 p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200">
                            {data.lesson.description}
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src={data.lesson.teacher.avatarURL}
                                alt=""
                            />
                            <div>
                            </div>
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block"> {data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm block"> {data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <a href="https://www.youtube.com/watch?v=FEDHaa0yRx0" className="p-4 text-sm bg-green-500 flex items-center rounded justify-center uppercase gap-2 font-bold ">
                            <WhatsappLogo />
                            Chamar professor
                        </a>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.youtube.com/watch?v=FEDHaa0yRx0" className="p-4 text-sm bg-green-500 flex items-center rounded justify-center uppercase gap-2 font-bold ">
                                <CodesandboxLogo />
                                Tire suas dúvidas
                            </a>
                        </div>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl"> SALVE O PROG </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                CHAPELEIRO MALUCO
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl"> SALVE O PROG </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                CHAPELEIRO MALUCO
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}