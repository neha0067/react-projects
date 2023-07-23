import React, {useState, useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [page, setPage] = React.useState('');

    const openSubmenu = () => {
        setShowSubmenu(true);
    }

    const closeSubmenu = () => {
        setShowSubmenu(false);
    }


    return (
        <AppContext.Provider value={{showSubmenu, openSubmenu, closeSubmenu, page, setPage}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
