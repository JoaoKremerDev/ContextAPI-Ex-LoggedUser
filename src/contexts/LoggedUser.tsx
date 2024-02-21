import { ReactNode, createContext, useState } from "react";


type ILoggedContextType = {
    name: string;
    setName: (n: string) => void;
}

export const LoggedUserContext = createContext<ILoggedContextType | null>(null)

export const LoggedUserProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState('João')
    return (
        <LoggedUserContext.Provider value={{ name, setName }}>
            {children}
        </LoggedUserContext.Provider>
    )
}