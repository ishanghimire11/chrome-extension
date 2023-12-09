import React, { createContext, useContext, useState } from 'react'

interface PasswordContextProps {
    passwordLength: number;
    toggleStates: Record<string, boolean>;
    passwordResult: string;
    handleSliderChange: (value: number) => void;
    handleToggleChange: (key: string, value: boolean) => void;
    handleResult: (result: string) => void;
}

const PasswordContext = createContext<PasswordContextProps | undefined>(undefined);

const PasswordProvider = ({children}) => {
    const [passwordLength, setPasswordLength] = useState(20);
    const [passwordResult, setResult] = useState("Click generate button");
    
    const [toggleStates, setToggleStates] = useState({
        includeUpperCase: true,
        includeLowerCase: true,
        includeNumbers: true,
        includeSymbols: true,
    })

    const handleSliderChange = (value:number) => {
        return setPasswordLength(value);
    }

    const handleToggleChange = (key:string, value:boolean) => {
        return setToggleStates((prev) => ({
            ...prev, [key]: value
        }));
    };

    const handleResult = (result: string) => {
        return setResult(result)
    };

    return (
        <PasswordContext.Provider value={{
            passwordLength,
            toggleStates,
            passwordResult,
            handleSliderChange,
            handleToggleChange,
            handleResult
        }}>
            {children}
        </PasswordContext.Provider>
    );
}

export default PasswordProvider;

export const usePasswordContext = (): PasswordContextProps => {
    const context = useContext(PasswordContext);
    if (!context) {
      throw new Error('usePasswordContext must be used within a PasswordProvider');
    }
    return context;
};
