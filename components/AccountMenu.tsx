import useCurrentUser from "@/hooks/useCurrentUser"
import { signOut } from "next-auth/react"
import React from "react"

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    const { data } = useCurrentUser()

    if(!visible) {
        return null
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex ">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flrex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src="/images/default-red.png" alt="Profile" />
                    <p className="text-white text-sm group-hover/item:underline">
                        {data?.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4"/>
                <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu

/**
 * group/item : A way we can target multiple group inside another group.
 */