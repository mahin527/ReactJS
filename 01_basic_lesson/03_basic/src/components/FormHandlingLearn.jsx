import { useState } from "react"
function FormHandlingLearn() {
    // const [name, setName] = useState('Mahin')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        // const data = [name, email, password]
        // console.log('Form submitted!');
        // console.log(data);
        console.log(formData);
        
    }
    return (
        <>
            <h3>
                FormHandlingLearn
            </h3>
            <div>
                {/* <form onSubmit={onSubmitHandler}>
                    Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
                    Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                    <input type="submit" value="Submit" />
                </form> */}

                <form onSubmit={onSubmitHandler}>
                    Name: <input type="text" name="name" value={formData.name} onChange={changeHandler} /> <br /> <br />
                    Email: <input type="email" name="email" value={formData.email} onChange={changeHandler} /> <br /> <br />
                    Password: <input type="password" name="password" value={formData.password} onChange={changeHandler} /> <br /> <br />
                    Phone: <input type="number" name="phone" value={formData.phone} onChange={changeHandler} /> <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default FormHandlingLearn