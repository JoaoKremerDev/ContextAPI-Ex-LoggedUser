import { LoggedUserContext } from "@/contexts/LoggedUser"
import { useContext } from "react"

export const Header = () => {

    const loggedUserCtx = useContext(LoggedUserContext);

    const handleLogout = () => {
        loggedUserCtx?.setName('');
    }
    const handleLogin = () => {
        loggedUserCtx?.setName('João');
    }

    return (
        <header className="bg-blue-200 max-w-screen-xl mx-auto flex justify-between p-4 items-center ">
            <h1 className="text-3xl">Context API</h1>
            {loggedUserCtx?.name &&
                <>
                    <div className="flex gap-4 items-center p-4">
                        <p className="">Usuário Logado: {loggedUserCtx?.name}</p>
                        <button className="border rounded bg-blue-400 p-4" onClick={handleLogout}>Logout</button>
                    </div>
                </>
            }
            {(!loggedUserCtx || loggedUserCtx.name === '') &&
                <div className="flex gap-4 items-center p-4">
                    <p>Usuário DESLOGADO</p>
                    <button className="border rounded bg-blue-400 p-4" onClick={handleLogin}>Logar</button>
                </div>
            }
        </header>
    )

}