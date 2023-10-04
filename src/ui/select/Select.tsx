import { useContext } from 'react'
import styles from './reactSelect.scss'
import ReactSelect from 'react-select'
import { FormContext } from '../../components/providers/FormProvider'

const Select = () => {
  let { setisSubscribed } = useContext(FormContext)

  let HandleSelect = (selected: any) => {
    setisSubscribed(selected.value)
  }

  const options = [
    { value: true, label: 'Subscribed' },
    { value: false, label: 'UnSubscribed' },
  ]

  return (
    <div className={styles.selectContainer}>
      <ReactSelect
        className='react-select-container'
        classNamePrefix='react-select'
        defaultValue={options[0]}
        options={options}
        required
        placeholder={<div className='select-placeholder-text'>Select category</div>}
        name='Subscription'
        onChange={HandleSelect}
      />
    </div>
  )
}

export default Select
