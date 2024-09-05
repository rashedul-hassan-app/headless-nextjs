import Link from 'next/link'
import Image from 'next/image'
// import LogoImg from '@/public/images/logo.svg'
import LogoImg from '@/public/images/logo_wbc.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Home">
      <Image className="max-w-none mt-5" src={LogoImg} width={100} height={100} priority alt="WBC" />
    </Link>
  )
}
