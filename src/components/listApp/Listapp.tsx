import styles from './Listapp.module.scss'
import Table from '../table/Table'
import Form from '../form/Form'
import { FormProvider } from '../providers/FormProvider'

const Listapp = () => {
  return (
    <div className={styles.container}>
      <FormProvider>
        <Form />
        <Table />
      </FormProvider>
    </div>
  )
}

export default Listapp
