import { useSelector } from "react-redux";
import { increment, decrement, setByAmount, reset } from "./actions"
import useActions from "./useActions";

export default function useCounter() {
  const count = useSelector(state => state.count);
  const actions = useActions({ increment, decrement, setByAmount, reset });

  return { count, ...actions }
}
