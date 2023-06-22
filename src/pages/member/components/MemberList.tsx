import { IMember } from '../../../interfaces/IMember'

interface IMemberList {
  members: IMember[]
}
export const MembersList = ({ members }: IMemberList) => {
  return (
    <div className=" p-20 border shadow-xl border-gray-50 rounded-xl">
      <p className="pb-3 text-2xl">Members list</p>

      <section>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        First Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        SSN
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => (
                      <tr
                        key={member.ssn}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {member.firstName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {member.lastName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {member.address}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {member.ssn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
