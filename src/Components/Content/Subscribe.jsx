import { Button, Stack, Typography } from '@mui/material';

const Subscribe = () => {
    const values = [
        { require: true, type: 'text', label: 'User Name', for: 'UserName', id: 'UserName', name: 'UserName', placeholder: 'Enter Name' },
        { require: true, type: 'email', label: 'Email Address', for: 'Email', id: 'Email', name: 'Email', placeholder: 'Email Address' },
        { require: false, type: 'text', label: 'Suggestion', for: 'Suggestion', id: 'Suggestion', name: 'Suggestion', placeholder: 'Leave any suggestion (optional)' },
    ];
    return (
        <Stack className='Page_Subscribe' bgcolor={'#244242'}>
            <Typography variant='h4' sx={{ textDecoration: 'underline', textUnderlineOffset: '5px', mb: '0.5em' }}>Get Updates</Typography>
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
                    <label htmlFor="Terms">By submitting this form you agree to our <a href='/'>Terms and Privacy Policy</a></label>

                </div>
                <Button type='submit' variant='contained' color='primary' sx={{ width: '-webkit-fill-available' }}>Subscribe</Button>
            </form>
        </Stack>
    )
}

export default Subscribe