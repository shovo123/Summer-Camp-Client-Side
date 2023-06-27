import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecurity from "./useAxiosSecurity";

const useInstructors = () => {
    const {user, loading} = useAuth();
    const [axiosSecurity] = useAxiosSecurity()
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorsLoading} = useQuery({
        queryKey: ['isInstructors', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecurity.get(`/users/instructors/${user?.email}`);
            return res.data.instructors;
        }
    })
    return [isInstructor, isInstructorsLoading]
}
export default useInstructors;