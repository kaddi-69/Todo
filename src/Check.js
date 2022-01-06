import React, { useState } from "react";
import "./Check.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Check() {
  const [change, setChange] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setChange((xyz )=>{
        return [...xyz,error]
    }) 
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="todoapp stack-large">
      <Button onClick={handleOpen} id="qwe">Add To Todo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <h1>Todo</h1>
        <form onSubmit={handleChange}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={(e) => setChange(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={(e) => setChange(e.target.value)}
            placeholder="Description"

          /><input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={(e) => setChange(e.target.value)}
            placeholder="Schope"

          />
          <button
            type="submit"
            className="btn btn__primary btn__lg"
            onClick={handleChange}
          >
            Add
          </button>
        </form>
        
        </Box>
      </Modal>

        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {change.map((res) => {
            return (
              <li className="todo stack-small">
                <label className="todo-label" htmlFor="todo-0">
                  {res}
                </label>

                <div className="btn-group">
                  <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">Eat</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Check;
