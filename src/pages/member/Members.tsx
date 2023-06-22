import { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useMembers } from '../../rest/member'
import { MemberForm } from './components/MemberForm'
import { MembersList } from './components/MemberList'

export const Members = () => {
  const loadMembers = useMembers()
  const members = useAppSelector((root) => root.member.members)

  useEffect(() => {
    loadMembers.mutate()
    const timer = setTimeout(() => {
      loadMembers.mutate()
    }, 120000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-row">
      <MemberForm />
      <MembersList members={members} />
    </div>
  )
}
