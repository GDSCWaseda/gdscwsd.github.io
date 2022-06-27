/* Cards */
export interface MemberType {
  firstName: string
  lastName?: string
  photo_link?: string
}

export interface CarouselCardProps {
  image: string
  subtitle: string
  title: string
  old: boolean
}

export interface MembersCardProps {
  teamName: string
  leader: MemberType
  member: Array<MemberType>
}

export interface HeaderCardProps {
  headTitle?: string
  title: string
  content?: string
}

export interface ImageCardProps {
  title: string
  content?: string
  image: string
  imagePosition: 'left' | 'right'
}

export interface MediaCardProps {
  size: 's' | 'm' | 'l'
  title: string
  image?: string
  open: boolean
  canOpen: boolean
}

export interface ImageIconProps {
  size: 's' | 'm' | 'l'
  title?: string
  color: 'yellow' | 'green' | 'blue' | 'red'
  image?: string
}

/* Pages */

export interface ErrorPageProps {
  detail: string | 'error' | 'dev'
}
