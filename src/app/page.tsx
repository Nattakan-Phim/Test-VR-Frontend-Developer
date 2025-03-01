"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Homepage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/pages/todo')
  }, [router])
}

export default Homepage