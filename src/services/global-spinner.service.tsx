import { createContext, useContext, useState, ReactNode } from 'react';
import GlobalSpinner from '@/components/global-spinner';

interface GlobalSpinnerContextProps {
    showSpinner: (text: string) => void;
    hideSpinner: () => void;
}

const GlobalSpinnerContext = createContext<GlobalSpinnerContextProps | undefined>(undefined);

export const useGlobalSpinner = () => {
    const context = useContext(GlobalSpinnerContext);
    if (!context) {
        throw new Error('useGlobalSpinner must be used within a GlobalSpinnerProvider');
    }
    return context;
};

export const GlobalSpinnerProvider = ({ children }: { children: ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [spinnerText, setSpinnerText] = useState('');

    const showSpinner = (text: string) => {
        setSpinnerText(text);
        setIsVisible(true);
    };

    const hideSpinner = () => {
        setIsVisible(false);
    };

    return (
        <GlobalSpinnerContext.Provider value={{ showSpinner, hideSpinner }}>
            {children}
            {isVisible && <GlobalSpinner text={spinnerText} />}
        </GlobalSpinnerContext.Provider>
    );
};
