import React, { useContext } from 'react'
import styles from './form.module.scss'
import Switch from '../../ui/switch/Switch'
import InputNum from '../../ui/input/InputNum'
import CheckBox from '../../ui/checkBox/CheckBox'
import Select from '../../ui/select/Select'
import { useAppDispatch } from '../../hooks/hooks'
import { addUser, deleteUser } from '../../store/usersReducer'
import { FormContext } from '../providers/FormProvider'
import InputText from '../../ui/input/InputText'


const Form = () => {

  let { userName, userAge, isSubscribed, isImployed, setuserAge, setuserName } = useContext(FormContext)
  const dispatch = useAppDispatch()
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    dispatch(
      addUser({
        name: userName,
        age: +userAge,
        subscription: isSubscribed,
        employment: isImployed,
      }),
    )
    setuserAge('')
    setuserName('')
  }
  const deleteHandler = () => {
    if (userName && userAge) {
      try {
        dispatch(
          deleteUser({
            name: userName,
            age: +userAge,
            subscription: isSubscribed,
            employment: isImployed,
          }),
        )
        setuserAge('')
        setuserName('')
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <div>
      <form autoComplete='on' onSubmit={handleSubmit} id='InsertForm' className={styles.form}>
        <legend> Insert Row</legend>
        <InputText />
        <InputNum />
        <Select />
        <CheckBox />
        <button>Insert</button>
        <hr />
        <Switch />
        <button type='button' onClick={deleteHandler}>
          Delete
        </button>
      </form>
    </div>
  )
}

export default Form
