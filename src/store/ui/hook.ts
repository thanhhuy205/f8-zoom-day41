import { useDispatch } from "react-redux";

export const useLoading = () => {
  const dispatch = useDispatch();
  return dispatch;
};
