import { addItem } from "../counter/newCounter/actions";
import useActions from "../counter/newCounter/useActions";

export default function useCalculator() {
    const actions = useActions({ addItem })

    return { ...actions }
}
