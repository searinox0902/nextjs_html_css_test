import { UserProvider } from '../context/UserContext'
import './../globals.css'

export default function RootLayout({ children }){
    return (
        <UserProvider>{children}</UserProvider>
    )
}