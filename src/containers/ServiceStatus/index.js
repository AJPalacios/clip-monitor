/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import { Container, Paper, Grid, Typography, Switch } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Success from '../../assets/images/success.png';
import MonitorServices from '../../services/index';
import "./styles.css"
import ServiceButton from '../../components/Buttons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    typography: {
        textAlign: 'center',
        margin: 20,
        fontFamily:  'Barlow',
        fontWeight: 600,
    },
    buttons: {
        fontFamily:  'Barlow',
        fontWeight: 500,
        textTransform: "none"
    }
  }));

const Services = () => {
    const [status, setStatus] = useState('');
    const [state, setState] = useState({
        checkedA: false,
    });

    useEffect(() => {
        fetchCardPresent()
        .then(res => {
            setStatus([...res])
        })
        .catch(console.log)
    },[]);

    const fetchCardPresent = async () => {
        const response = await MonitorServices.fetchStatus();
        return response;
    }

    const fetch = async () => {
        const response = await MonitorServices.fetchStatus();
        setStatus([...response])
    }

    const handleChange = async (event) => {
        const { checked } = event.target;
        setState({ ...state, [event.target.name]: event.target.checked });
        if (checked) {
            await MonitorServices.sendEmailNotification();
        }
    };

    const classes = useStyles();
    return (
        <div>
            <Container 
                maxWidth="sm" 
                container
                direction="column"
                justify="center"
                alignItems="center" 
            >
                <Paper>
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{textAlign: 'center'}} >
                            <Typography className={classes.typography} variant="h5">¡Todo está funcionando!</Typography>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center'}} >
                            <img className="img" src={Success} alt="success"/>
                        </Grid>
                        <Grid item xs={12} >
                            <div className="buttonsContainer">
                                {status !== '' ? status.map((item) => {
                                    return <ServiceButton onClick={fetch}  message={item.message} service={item.serviceName} statusCode={item.statusCode} />
                                }) : ''}
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center'}} >
                            <div>
                                <p className="anchorText">
                                    Algo no esta funcionando como debería <br/>  Da click 
                                    <a href="https://clip.mx/#contacto" target="_blank" > aquí</a>
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center'}} >
                            <div className="switchContainer">
                                <Switch
                                    checked={state.checkedA}
                                    onChange={handleChange}
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <p>Quiero que me avisen cuando se reestablezca el servicio.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}


export default Services;