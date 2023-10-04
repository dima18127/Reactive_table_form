import { useContext, useState } from 'react'
import styles from './table.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { FormContext } from '../providers/FormProvider'
import { sortUsers } from '../../store/usersReducer'

interface IUser {
  name: string
  age: number
  subscription: boolean
  employment: boolean
  id: number
}

const Table = () => {
  const data = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()
  const { setuserName, setuserAge, setisImployed, setisSubscribed } = useContext(FormContext)
  let [activeSortedColumn, setactiveSortedColumn] = useState('')
  const userHandler = (index: number) => {
    setuserAge(data[index].age)
    setuserName(data[index].name)
    setisImployed(data[index].employment)
    setisSubscribed(data[index].subscription)
  }
  const sortByNameHandler = (field: string) => {
    dispatch(sortUsers(field))
    if (activeSortedColumn === field) {
      console.log('here')
      setactiveSortedColumn('')
    } else {
      setactiveSortedColumn(field)
    }
  }
  const colNames = ['name', 'age', 'subscription', 'employment']

  return (
    <div className={styles.container}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {colNames.map((colName: string, index) => {
                return (
                  <th
                    key={index}
                    className={activeSortedColumn === colName ? styles.active : ''}
                    onClick={() => sortByNameHandler(colName)}
                  >
                    {colName}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item: IUser, index: number) => (
                <tr key={item.id + item.name +item.age } onClick={() => userHandler(index)}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.subscription ? 'Subscribed' : 'Not subscribed'}</td>
                  <td>{item.employment ? 'Employed' : 'Not Employed'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
