import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { usersData } from './data'

localStorage.setItem('users', JSON.stringify(usersData))
const usersDataFromLocalStorage = localStorage.getItem('users')
const users = usersDataFromLocalStorage !== null ? JSON.parse(usersDataFromLocalStorage) : []

interface IUser {
  name: string
  age: number
  subscription: boolean
  employment: boolean
  id?: number
}
type AddUserPayload = IUser

export const counterSlice = createSlice({
  name: 'usersReducer',
  initialState: {
    users,
    sortDirection: 'asc',
  },
  reducers: {
    addUser: (state, action: PayloadAction<AddUserPayload>) => {
      let { name, age, subscription, employment } = action.payload
      state.users.push({ name, age, id: state.users.length + 1, subscription, employment })
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    deleteUser: (state, action) => {
      let { name, age, subscription, employment } = action.payload
      let index = state.users.findIndex((user: IUser) => {
        return user.name === name && user.age === age && user.subscription === subscription && user.employment === employment
      })
      if (index >= 0) {
        state.users.splice(index, 1)
        localStorage.setItem('users', JSON.stringify(state.users))
      } else {
        throw new Error('No user with such parametres')
      }
    },
    sortUsers: (state, action) => {
      const propertyName = action.payload
      state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc'
      state.users.sort((a: any, b: any) => {
        const A = a[propertyName]
        const B = b[propertyName]
        if (typeof A === 'string') return (state.sortDirection === 'asc' ? 1 : -1) * B.localeCompare(A)
        if (typeof A === 'number') return (state.sortDirection === 'asc' ? 1 : -1) * (B - A)
        if (typeof A === 'boolean') {
          return (state.sortDirection === 'asc' ? 1 : -1) * (A ? 1 : -1)
        }
        return 0
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, sortUsers } = counterSlice.actions
export const AddUser = createAction('usersReducer/addUser', (payload: IUser) => ({
  payload,
}))

export default counterSlice.reducer
