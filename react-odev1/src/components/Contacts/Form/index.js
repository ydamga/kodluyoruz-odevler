import {useState} from 'react'

const initialFormValues = {fullname:"", phone:""}

function Form({addContact, contacts}) {
    
    const [form, setForm] = useState(initialFormValues)
    
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (form.fullname === "" || form.phone === "") {
            return false
        }
        addContact([...contacts, form])
        console.log(form)

        setForm(initialFormValues)
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name='fullname' placeholder='Full Name' onChange={onChangeInput} value={form.fullname}/>
        </div>

        <div>
        <input name="phone" placeholder='Phone Number' onChange={onChangeInput} value={form.phone}/>
        </div>

        <div className='btn'>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form