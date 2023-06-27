import { useEffect } from "react"

const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title} -  Sport Light`
  },[title])
}
export default useTitle
