import React, { useContext } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import styles from './InputNum.module.scss'
import { FormContext } from '../../components/providers/FormProvider'
const InputNum = () => {
  let { setuserAge, userAge } = useContext(FormContext)
  let newValueFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserAge(e.currentTarget.value)
  }
  const incrementAge = () => {
    setuserAge(+userAge + 1 + '')
  }
  const decrementAge = (e: any) => {
    if (+userAge > 1) setuserAge(+userAge - 1 + '')
  }
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => newValueFromInput(e)}
          required
          value={userAge}
          type='number'
          name='Age'
          min='1'
          max='100'
          placeholder='Age'
        />
        <button type='button' className={styles.buttonArrow} onClick={decrementAge}>
          <BsChevronDown size='15px' />
        </button>
        <button type='button' className={styles.buttonArrow} onClick={incrementAge}>
          <BsChevronUp size='15px' />
        </button>
      </div>
    </div>
  )
}

export default InputNum
