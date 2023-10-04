import  { useContext } from 'react'
import styles from './CheckBox.module.scss'
import { FormContext } from '../../components/providers/FormProvider'

const CheckBox = () => {
  const { isImployed, setisImployed } = useContext(FormContext)
  return (
    <div>
      <input
        className={isImployed ? styles.checked : ''}
        checked={isImployed}
        type='checkbox'
        id="Employed"
        onChange={() => {
          setisImployed(!isImployed)
        }}
      />
      <label 
      htmlFor='Employed'
      onClick={() => {
        setisImployed(!isImployed)
      }}
      >
        <span>Employed</span>
      </label>
    </div>
  )
}

export default CheckBox
