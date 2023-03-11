import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfiles, likePost, userData } from '../api/dashboard';

const initialState = {
  isLoading: false,
  pageNumber: 0,
  userData: {},
  profiles: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 456,
      like: false,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 765,
      like: false,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 8955,
      like: false,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 665,
      like: false,
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 47855,
      like: false,
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4545,
      like: false,
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4588,
      like: false,
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 7856,
      like: false,
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4546,
      like: false,
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4565,
      like: false,
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 7789,
      like: false,
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4588,
      like: false,
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4895,
      like: false,
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 5595,
      like: false,
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4895,
      like: false,
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      likes: 4895,
      like: false,
    },
  ],
  moneyValue: 0,
};

export const uploadProfiles = createAsyncThunk(
  'dashboard/uploadProfiles',
  getProfiles
);
export const updateProfilesList = createAsyncThunk(
  'dashboard/uploadProfilesList',
  getProfiles
);

export const likeAPost = createAsyncThunk('dashboard/likeAPost', likePost);

export const getUserData = createAsyncThunk('dashboard/getUserData', userData);

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetDashboardState: () => initialState,
    pageCounter: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    moneyEarned: (state, payload) => {},
    forLikes: (state, action) => {
      const index = state.profiles.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        if (state.profiles[index].like === false) {
          state.profiles[index].likes = state.profiles[index].likes + 1;
          state.profiles[index].like = true;
          state.moneyValue = state.moneyValue + 1;
        } else {
          state.profiles[index].likes = state.profiles[index].likes - 1;
          state.profiles[index].like = false;
          state.moneyValue = state.moneyValue - 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadProfiles.fulfilled, (state, action) => {
      state.profiles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(uploadProfiles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadProfiles.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateProfilesList.fulfilled, (state, action) => {
      state.profiles = [...state.profiles, ...action.payload];
    });

    builder.addCase(likeAPost.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = {
        email: action.payload.email,
        balance: action.payload.earnedMoney,
        limit: action.payload.limitReached,
      };
    });
  },
});

export const { pageCounter, resetDashboardState, moneyEarned, forLikes } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
