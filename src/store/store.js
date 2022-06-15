import { configureStore } from '@reduxjs/toolkit'
import  indicatorSlice  from '../feature/PageIndicatorSlice'

export default configureStore({
  reducer: {
    indicator:indicatorSlice
  },
})