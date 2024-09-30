import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ViewDetailsCard from './ViewDetailsCard';
import './index.css'
import { BorderAllRounded } from '@mui/icons-material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
    borderRadius: "10px"
};

export default function BasicModal({ openModal, closeModal, prodDetails, addToCart }) {
    console.log("prodDetails=>>", prodDetails)
    return (
        <div>
            <Modal
                open={openModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ViewDetailsCard prodDetails={prodDetails} addToCart={addToCart} />
                </Box>
            </Modal>
        </div>
    );
}
