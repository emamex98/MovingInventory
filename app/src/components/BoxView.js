import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from './Row';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const BoxView = () => {

    const [data, setData] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        if(data === null){
            var url = `https://mudanza-2021-default-rtdb.firebaseio.com/data/boxes/${id}.json`;
            fetch(url)
            .then(response => response.json())
            .then(data => setData(data));
        }
    });
    
    if(data){
        return(
            <div style={{ height: 600, width: '100%' }}>

                <br/>
                <Typography variant="h6" gutterBottom component="div">
                    Caja No. {id}
                </Typography>

                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Categoría</TableCell>
                            <TableCell align="left">Artículo</TableCell>
                            <TableCell/>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <Row row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        )
    } else {
        return( <p>Cargando...</p> )
    }

}