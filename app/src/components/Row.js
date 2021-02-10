import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const Row = (props) => {

    const [open, setOpen] = useState(false);
    const row = props.row;

    return (
        <React.Fragment>
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.category}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={3}>
                            {row.description}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            
        </React.Fragment>
    )

}