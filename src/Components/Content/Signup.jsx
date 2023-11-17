import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
    const values = [
        { require: true, type: 'text', label: 'User Name', for: 'UserName', id: 'UserName', name: 'UserName', placeholder: 'Enter Name' },
        { require: true, type: 'email', label: 'Email Address', for: 'Email', id: 'Email', name: 'Email', placeholder: 'Email Address' },
        { require: true, type: 'password', label: 'Password', for: 'Password', id: 'Password', name: 'Password', placeholder: 'Password' },
    ];
    return (
        <Stack className='Page_Account'>
            <Stack className='Page_Signup' justifyContent={'center'} alignItems={'center'} bgcolor={'#030409'} color={'#fff'}>
                <Typography variant='h4' sx={{ textDecoration: 'underline', textUnderlineOffset: '5px', mb: '0.5em' }}>Sign Up</Typography>
                <form className='Subscribe_form' action="/" method='post'>
                    {
                        values.map((value, index) => (
                            <div className='InputField' key={index}>
                                <label htmlFor={value.for}>{value.label}</label>
                                <input type={value.type} name={value.name} id={value.id} placeholder={value.placeholder} required={value.require} />
                            </div>
                        ))
                    }
                    <div className='Terms'>
                        <input type="checkbox" name="Terms" id="Terms" required />
                        <label htmlFor="Terms"><Typography variant='subtitle2' letterSpacing={'0.5px'} fontWeight={100}>By submitting this form you agree to our <a href='/'>Terms and Privacy Policy</a></Typography></label>
                    </div>
                    <Button type='submit' variant='contained' color='primary' sx={{ width: '-webkit-fill-available' }}>Sign up</Button>
                </form>
                <Link to={'/login'}>
                    <Typography mt={'1em'} variant='subtitle2' fontWeight={100} color={'#fff'}>
                        Already have an Account?
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}

export default Signup