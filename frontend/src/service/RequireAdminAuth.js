import { Navigate, useLocation } from 'react-router-dom'
import { useAuth as udminUseAuth } from './store/adminAuth'

export const RequireAdminAuth = ({ children }) => {
  const location = useLocation()
  const auth = udminUseAuth()
  if (!auth.admin) {
    return <Navigate to='/admin/login' state={{ path: location.pathname }} />
  }
  return children
}
