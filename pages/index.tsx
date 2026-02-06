import Desktop from '@/components/Desktop'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Nilsen | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Kevin Nilsen - Full Stack Developer specializing in modern web applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Desktop />
    </>
  )
}
