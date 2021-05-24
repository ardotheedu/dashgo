import { ReactNode, useContext, createContext, useEffect  } from "react";
import { UseDisclosureProps, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureProps

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()
    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SidebarDrawerContext)