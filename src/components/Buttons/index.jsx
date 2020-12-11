import { Button } from '@material-ui/core';
import "./styles.css";



const ServiceButton = ({service, statusCode, onClick}) => {
    const dynamicStatus = () => {
        switch(statusCode) {
            case 0:
                return <span className="span">Incidente</span>
            case 1:
                return <span className="spanGreen">Funcionando correctamente</span>
            case 2:
                return <span className="spanYellow">Mantenimiento</span>
            default: 
                return ''
        }
    }

    return (
        <div>
            <Button color="secondary" variant="contained" onClick={onClick} >
                {service}
            </Button>
            {dynamicStatus()}
        </div>
    )
}

export default ServiceButton;
