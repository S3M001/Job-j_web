import { useState, createContext, useContext } from 'react'

const AdminAuthContext = createContext(null)

export const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)

    const login = admin => {
        setAdmin(admin)
    }

    const logout = () => {
        setAdmin(null)
        localStorage.removeItem('admin')
    }

    return (
        <AdminAuthContext.Provider value={{ admin, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AdminAuthContext)
}
