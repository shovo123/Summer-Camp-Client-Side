import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecurity from './useAxiosSecurity';
const useCardClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecurity] = useAxiosSecurity()
    const {data: cardClass = [] ,refetch } = useQuery({
        queryKey: ['cardClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecurity(`/myAddedClass?email=${user?.email}`)
            return res.data;
        },
    })
    return [cardClass, refetch]

}
export default useCardClass;