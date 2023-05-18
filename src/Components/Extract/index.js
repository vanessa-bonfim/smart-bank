import React from "react";
import { Box, Button } from "Components/UI";
import { extractList } from "info";
import BoxItems from "Components/Items";

const Extract = () => {
    return <Box>
        {
            extractList.updates.map(({ id, type, value, date, from }) =>{
                return (                    
                    <BoxItems key={id} type={type} from={from} value={value} date={date} />                   
                );
            })
        }
        <Button>Ver mais</Button>
    </Box>
};

export default Extract;