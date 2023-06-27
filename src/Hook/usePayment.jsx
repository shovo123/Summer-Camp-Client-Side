import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecurity from "./useAxiosSecurity";

const usePayment = () => {
  const { user, loading } = useAuth();
  const [axiosSecurity] = useAxiosSecurity();
  const { data: paymentClass = [], refetch } = useQuery({
    queryKey: ["paymentClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecurity(`/myPaymentClass?email=${user?.email}`);
      return res.data;
    },
  });
  return [paymentClass, refetch];
};
export default usePayment;
