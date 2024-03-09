import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../styles/FAQ.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: 'rgba(0, 0, 0, .05)',
}));

export default function FAQ() {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='faq-section my-10 flex flex-col lg:items-center text-center'>
            <p className='faq-heading'>FAQs</p>
            {/* <div className='flex flex-col items-center'> */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="lg:w-1/2 text-center">
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="text-white text-center">
                    <Typography className='text-white text-center' >What makes out AI platform unique?</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography className='text-left'>
                        Our AI platform stands out due to its advanced features, personalized interactions, and seamless integration capabilities.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="lg:w-1/2">
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography className='text-white text-left' >How can I integrate the AI platform with my existing systems?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-left'>
                        Integration is straightforward with our provided APIs and documentation. Our support team is also available to assist you.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="lg:w-1/2">
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography className='text-white text-left' >Can the AI platform be customized for specific industry needs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-left'>
                        Yes, our AI platform is highly customizable, and we work closely with clients to tailor solutions to their specific industry requirements.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="lg:w-1/2">
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography className='text-white text-left' >What kind of support is available after implementation?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-left'>
                        We provide ongoing support, including regular updates, troubleshooting, and assistance to ensure optimal performance post-implementation.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* </div> */}
        </div>
    );
}