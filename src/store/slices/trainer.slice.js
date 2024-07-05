import { createSlice } from "@reduxjs/toolkit";

const trainer = createSlice ({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (_state, action) => action.payload,
    }
});

export const { setTrainer } = trainer.actions;

export default trainer.reducer;