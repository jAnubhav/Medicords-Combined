import { createContext, useState } from "react";

const CredContext = createContext();

const CredContainer = ({ children }) => {
    const [formData, setFormData] = useState({
        aadharId: '', nationalId: '', name: '', password: ''
    });

    const [load, setLoad] = useState(false);

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [status, setStatus] = useState(sessionStorage.getItem("status") || "patients");

    const shortenAadharId = aadharId => aadharId.replace(/\s+/g, "");
    const shortenNationalId = nationalId => nationalId.replace(/\s+/g, "");

    return (
        <CredContext.Provider value={{
            formData, setFormData, load, setLoad,
            token, setToken, status, setStatus,
            shortenAadharId, shortenNationalId
        }}> {children} </CredContext.Provider>
    );
};

export { CredContainer, CredContext };