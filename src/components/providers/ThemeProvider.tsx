import { Dispatch, FC, SetStateAction, createContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
type TypeSetState<T> = Dispatch<SetStateAction<T>>

type ThemeContextProviderProps = {
  children: React.ReactNode
}
type IContext = {
  dark: boolean
  setDark: TypeSetState<boolean>
}
export const ThemeContext = createContext<IContext>({ dark: false, setDark: () => {} })
export const ThemeProvider: FC<ThemeContextProviderProps> = ({ children }: ThemeContextProviderProps) => {
  const [dark, setDark] = useLocalStorage('darkTheme', false)
  return <ThemeContext.Provider value={{ dark, setDark }}>{children}</ThemeContext.Provider>
}
