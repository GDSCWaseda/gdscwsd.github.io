/* Cards */
export interface MemberType {
  firstName: string
  lastName: string
  photo_link: string
}

export interface MembersCardProps {
  teamName: string
  leader: MemberType
  member: Array<MemberType>
}

export interface HeaderCardProps {
  teamName: string
  explanation: string
}

export interface ImageCardProps {
  title: string
  content: string
  image: string
  imagePosition: string
}
