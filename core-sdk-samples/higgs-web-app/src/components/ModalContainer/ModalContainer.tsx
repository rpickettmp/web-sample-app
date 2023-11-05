import { Dialog, Grid, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    handleClose?: () => void;
}
const Transition = React.forwardRef(
    function Transition(
        props: TransitionProps & {
        children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction='up' ref={ref} {...props} />;
    },
);

const ModalContainer: React.FC<ModalProps> = ({
    isOpen,
    handleClose,
    children,
}) => {
    return (
        <Dialog
            open={isOpen}
            sx={{
                '& .MuiDialog-container': {
                    '& .MuiPaper-root': {
                        margin: '8px',
                    },
                },
            }}
            onClose={handleClose}
            TransitionComponent={Transition}
            keepMounted
        >
            <Grid
                container
                columns={1}
                spacing={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 0.1,
                    px: 0.1,
                    background:
                        'linear-gradient(180deg, #1a1a1a 0%, #0E1014 100%);',
                }}
            >
                {children}
            </Grid>
        </Dialog>
    );
};

ModalContainer.defaultProps = {
    handleClose: () => {},
};

export default ModalContainer;
