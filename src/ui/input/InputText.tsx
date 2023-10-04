import React, { useContext } from 'react'
import { FormContext } from '../../components/providers/FormProvider'

const InputText = () => {
  let { userName, setuserName } = useContext(FormContext)
  let handleinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserName(e.target.value)
  }
  return (
    <div>

      <input
        type='text'
        value={userName}
        minLength={2}
        maxLength={15}
        name='name'
        onChange={handleinput}
        required
        placeholder='Name'
        autoComplete='on'
      />
    </div>
  )
}

export default InputText
