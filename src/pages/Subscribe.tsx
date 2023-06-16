import { gql, useMutation } from "@apollo/client";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom"
import { useState, FormEvent } from "react"


const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
  
`

export function Subscribe() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
            <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto ">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        O Centro Universitário Fundação Assis Gurgacz,
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        hoje, a instituição de ensino superior que mais cresce no Paraná.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block"> 
                    Inscreva-se gratuitamente
                    </strong>

                    <form onSubmit={handleSubscribe} action="" className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event?.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu E-mail"
                            onChange={event => setEmail(event?.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garanta sua Vaga

                        </button>
                    </form>
                </div>



            </div>
            <img src="/src/assets/wallfag.jpg" className="mt-10" alt="" />
        </div>
    )
}