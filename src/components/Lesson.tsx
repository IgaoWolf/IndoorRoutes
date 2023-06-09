import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import classNames from 'classnames';

interface lessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export function Lesson(props: lessonProps) {

    const { slug } = useParams<{ slug: string}>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'H'mm", {
        locale: ptBR
    });

    const isActiveLesson = slug === props.slug;


    return (

       <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300" >
            {availableDateFormatted}
        </span>
    

      <div className={ classNames(' rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500' : isActiveLesson,

      })}>
        <header className="flex items-center justify-between columns">
            {isLessonAvailable ? (
            <span className={classNames( 'text-sm text-green-500 font-medium flex gap-2 items-center', {
                'text-blue-500': !isActiveLesson,
                'text-white': isActiveLesson,
            }

            )}>
            <CheckCircle size={20} />
            Conteudo Liberado
        </span>
        ) : (
            <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
            <Lock size={20} />
            Em breve
        </span>
        )}
        <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold' , {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
        }

        )} >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
        </span> 
        </header>
        <strong className={classNames('mt-5 block', {
                'text-gray-200': !isActiveLesson,
                'text-white': isActiveLesson,
        })} >
        {props.title}
        </strong>       
      </div>
       </Link>
    )
}