import { getLoading } from "@/store/ui/selectors";
import { useSelector } from "react-redux";

const LoadingOverlay = () => {
  const loading = useSelector(getLoading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm z-50">
      <div className="w-16 h-16 border-4 border-slate-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-gray-700 font-medium text-lg">Loading...</span>
    </div>
  );
};

export default LoadingOverlay;
