import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../providers/ThemeProvider'
import cn from 'classnames'

interface boxprops {
  children: ReactNode
}
const Layout = ({ children }: boxprops) => {
  const { dark } = useContext(ThemeContext)
  return <div className={cn('layout', { dark: dark === true })}>{children}</div>
}

export default Layout
