import { useRouter } from 'next/router'
import LoadingHeart from '@/components/LoadingHeart'

export default function useAuth({ getSession, redirectTo, mustHaveSession }) {
  const router = useRouter()
  const [session, loading] = getSession()

  if (loading) return { isLoading: true, LoadingComponent: LoadingHeart }
  if (mustHaveSession && !session) return router.push(redirectTo)
  if (mustHaveSession && session) return { isLoading: false, session }

  if (session) return router.push(redirectTo)
  if (!session) return { isLoading: false }
}
