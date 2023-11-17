import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const values = [
        { require: true, type: 'text', label: 'Email Address', for: 'Email', id: 'Email', name: 'Email', placeholder: 'Email Address' },
        { require: true, type: 'password', label: 'Password', for: 'Password', id: 'Password', name: 'Password', placeholder: 'Password' },
    ];
    return (
        <Stack className='Page_Account'>
            <Stack className='Page_Login' bgcolor={'#030409'} color={'#fff'}>
                <Typography variant='h4' sx={{ textDecoration: 'underline', textUnderlineOffset: '5px', mb: '0.5em' }}>Log In</Typography>
                <form className='Subscribe_form' action="/" method='post'>
                    {
                        values.map((value, index) => (
                            <div className='InputField' key={index}>
                                <label htmlFor={value.for}>{value.label}</label>
                                <input type={value.type} name={value.name} id={value.id} placeholder={value.placeholder} required={value.require} />
                            </div>
                        ))
                    }
                    <Button type='submit' variant='contained' color='primary' sx={{ width: '-webkit-fill-available' }}>Login</Button>
                </form>
                <Link to={'/signup'}>
                    <Typography mt={'1em'} variant='subtitle2' fontWeight={100} color={'#fff'}>
                        Don't have an Account?
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}

export default Login