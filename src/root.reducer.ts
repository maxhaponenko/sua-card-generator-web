import { combineReducers } from '@reduxjs/toolkit'
import createPdfCardFlowReducer from '@/app/create-pdf-card-flow/create-pdf-card-flow.slice'

const rootReducer = combineReducers({
  card: createPdfCardFlowReducer,
})

export default rootReducer