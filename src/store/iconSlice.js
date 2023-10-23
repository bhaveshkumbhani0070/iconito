import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    icons: {
        width: '100', height: '100', fill: '#fccb00', titleColor: '#ff0000', subtitleColor: '#000000',
        titleFont: '14',
        titleSubFont: '12',
        blockSize: '10',
        selectedtitle: 'overline',
        selectedSubtitle: 'bold'
    }
};

const iconSlice = createSlice({
    name: 'icon',
    initialState,
    reducers: {
        updateIcon: (state, action) => {
            state.icons = action.payload;
        }
    },
});

export const { updateIcon } = iconSlice.actions;
export default iconSlice.reducer;
