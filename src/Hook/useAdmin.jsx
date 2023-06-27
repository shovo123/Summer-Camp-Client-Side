import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecurity from "./useAxiosSecurity";

const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecurity] = useAxiosSecurity()
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecurity.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;