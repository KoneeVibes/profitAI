import React from "react"

export type ContextType = {
    openMenu: boolean
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export type ContextProviderPropsType = {
    children: React.ReactNode
}