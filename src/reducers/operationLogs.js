import { ADD_OPERRATION_LOG, DELETE_ALL_OPERRATION_LOGS } from "../actions";

export const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERRATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      }
      return [operationLog, ...state];
    case DELETE_ALL_OPERRATION_LOGS:
      return [];
    default:
      return state;
  }
}
