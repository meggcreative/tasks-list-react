import { configureStore } from "@reduxjs/toolkit";
import createMiddleware from "redux-saga";
import { tasksSaga } from "./features/tasks/tasksSaga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddleware = createMiddleware();

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);
