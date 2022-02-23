import requestDogApi from '../api/requestDogApi'
const getDogs = () => {
   getDogNames()
}
const getDogNames = async () => {
   const res = await requestDogApi.get()
   console.log(res)
}
export default getDogs
