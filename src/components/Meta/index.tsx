import { Helmet } from 'react-helmet-async'

import { MetaType } from '~/types'
export const Meta: React.FC<{
  props: MetaType
}> = ({ props }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{props.title} | GDSC Waseda </title>
      <meta
        name="description"
        content={`${props.description} | GDSC Waseda is a student society supported by Google Developers based in Waseda Univ., Tokyo"`}
      />
      {/* OGP */}
      <meta content={props.title} property="og:title" />
      <meta content={props.description} property="og:description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GDSC Waseda Official Website" />
    </Helmet>
  )
}
export default Meta
