import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  selectTasksState,
  setTasks,
  fetchExampleTasksError,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "coś poszło nie tak");
  }
}

function* saveTasksInLocalStorageHandler() {
  const { tasks } = yield select(selectTasksState);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
