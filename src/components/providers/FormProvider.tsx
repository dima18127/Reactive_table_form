import { Dispatch, FC, SetStateAction, createContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
type TypeSetState<T> = Dispatch<SetStateAction<T>>

type FormContextProviderProps = {
  children: React.ReactNode
}
type IContext = {
  userName: string
  setuserName: TypeSetState<string>
  userAge: string | number
  setuserAge: TypeSetState<string>
  isSubscribed: boolean
  setisSubscribed: TypeSetState<boolean>
  isImployed: boolean
  setisImployed: TypeSetState<boolean>
}
export const FormContext = createContext<IContext>({
  userName: '',
  setuserName: () => {},
  userAge: '',
  setuserAge: () => {},
  isSubscribed: true,
  setisSubscribed: () => {},
  isImployed: false,
  setisImployed: () => {},
})

export const FormProvider: FC<FormContextProviderProps> = ({ children }: FormContextProviderProps) => {
  const [userName, setuserName] = useLocalStorage('userName', '')
  const [userAge, setuserAge] = useLocalStorage('userAge', '')
  const [isSubscribed, setisSubscribed] = useLocalStorage('isSubscribed', true)
  const [isImployed, setisImployed] = useLocalStorage('isImployed', false)

  return (
    <FormContext.Provider
      value={{ userName, setuserName, userAge, setuserAge, isSubscribed, setisSubscribed, isImployed, setisImployed }}
    >
      {children}
    </FormContext.Provider>
  )
}
