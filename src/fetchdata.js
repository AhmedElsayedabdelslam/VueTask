
import { ref,onMounted } from "vue";

export function fetchData(url) {
    const data=ref(null)
    const error=ref(null)

    onMounted(async()=>{
      try {
         const res= await fetch(url)
       data.value=res.json()

      }catch(er){
        error.value=er

      }

        
        
    })
    return {data,error}
}