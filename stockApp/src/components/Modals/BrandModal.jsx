import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyle";

export default function BrandModal({ open, handleClose, initialState }) {
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {//* id varsa edit işlemi
      putStockData("brands", info);
    } else {//* id yoksa create işlemi
      postStockData("brands", info);
    }
    handleClose()
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={flexColumn}
          >
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <TextField
              label="Brand Logo"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
             { info._id ? "Update Brand" : "Submit Brand"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
