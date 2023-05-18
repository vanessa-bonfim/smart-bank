import React from "react";
// Importação dos componentes 'Box' e 'Button' do projeto
import { Box, Button } from "Components/UI";
// Importação da função 'extractList' do módulo 'info'
import { extractList } from "info";
// Importação do componente 'BoxItems'
import BoxItems from "Components/Items";

// Componente 'Extract'
const Extract = () => {
    return (
        <Box>
            {
                // Mapeamento dos elementos em 'extractList.updates'
                extractList.updates.map(({ id, type, value, date, from }) => {
                    return (
                        // Renderização do componente 'BoxItems' com as propriedades correspondentes
                        <BoxItems key={id} type={type} from={from} value={value} date={date} />
                    );
                })
            }
            {/* Botão para visualizar mais */}
            <Button>Ver mais</Button>
        </Box>
    );
};

export default Extract;
