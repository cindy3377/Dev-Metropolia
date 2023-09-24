import {
  WorkoutsContext,
  WorkoutDispatchContext,
} from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  const dispatch = useContext(WorkoutDispatchContext);
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }
  if (!dispatch) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutDispatchContextProvider"
    );
  }
  return { context, dispatch };
};
