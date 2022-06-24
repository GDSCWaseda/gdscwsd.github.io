import Head from 'next/head'

export default function CommonMeta({
  title = 'Google Developers Student Clubs Waseda',
  description = 'GDSC Waseda is a student society supported by Google Developers based in Waseda Univ., Tokyo',
  keywords = 'GDSC Waseda'
}) {
  return (
    <Head>
      <title>GDSC Waseda | {title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={`GDSC Waseda | ${title}`} />
      <meta property="og:image" content="public/logo.svg" />
      <meta
        property="og:description"
        content={`${description} | GDSC Waseda is a student society supported by Google Developers based in Waseda Univ., Tokyo`}
      />
      <meta name="keywords" content={keywords}></meta>
      <link rel="icon" href="logo.svg" />
    </Head>
  )
}
