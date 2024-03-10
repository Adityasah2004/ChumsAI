import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v33su0b', 'template_hzqyhfk', refForm.current, 'dlGGQb2d2yTvzRX7X')
            .then((result) => {
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                console.log(result.text);
                document.getElementsByName('from_name')[0].value = '';
                document.getElementsByName('from_email')[0].value = '';
                document.getElementsByName('message')[0].value = '';
                // document.getElementsByName('message')[0].value = '';
            })
            .catch((error) => {
                console.log(error);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
                document.getElementsByName('from_email')[0].value = '';
                document.getElementsByName('from_email')[0].value = '';
                // document.getElementsByName('message')[0].value = '';
            });
    };

    return (
        <>
            <Navbar/>
            <section id='contact' className='contact-sec'>
                <div className='contact'>
                    <h2>Contact</h2>
                    <div className='flex flex-col items-center'>
                        <div className='contact-info'>
                            <span>
                                <p>
                                    <span className="material-symbols-outlined">
                                        location_on
                                    </span>
                                    Location
                                </p>
                                <div>
                                    Mumbai, India
                                </div>
                            </span>
                            <span>
                                <p>
                                    <span className="material-symbols-outlined">
                                        mail
                                    </span>
                                    E-mail
                                </p>
                                <div>
                                    chumsai.tech@gmail.com
                                </div>
                            </span>
                            <span>
                                <p>
                                    <span className="material-symbols-outlined">
                                        smartphone
                                    </span>
                                    Phone
                                </p>
                                <div>
                                    +91 91367 42031
                                </div>
                            </span>
                        </div>
                        <div className='contact-form w-full'>
                            {/* <h3>Contact form</h3> */}
                            <form className='form w-full' ref={refForm} onSubmit={sendEmail}>
                                <div>
                                    <input type="text" placeholder="Name" name='from_name' required />
                                    <input type="email" placeholder="Email" name='from_email' required />
                                    <textarea placeholder="Message" cols="10" rows="4" name='message' className='rounded-lg bg-black text-white' required></textarea>
                                </div>
                                <button type="submit">
                                    {/*<span className="material-symbols-outlined">
                                        send
                                    </span>*/}
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarSeverity === 'success' ? 'Form Submitted Successfully!' : 'Form Submission Failed!'}
                </Alert>
            </Snackbar>
        </>
    )
}
