import { useRouter } from "next/router"


function RedirectLink(link : string) {
    const router = useRouter()
  return (
   router.replace(link)
  )
}

export default RedirectLink