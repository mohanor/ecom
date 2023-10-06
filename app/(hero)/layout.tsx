
import Hero from '@/components/ui/Hero'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <>
        <Hero />
        {children}
    </>
  )
}
