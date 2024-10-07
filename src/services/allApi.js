import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




//login - // content save by post method
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//add employee
export const addEmployeeApi = async(reqBody,reqHeader)=>{

    return await commonApi('POST',`${serverUrl}/addemployee`,reqBody,reqHeader)

}



//to get all employee list //send by using query parameter
//query parameter - syntax => baseurl?key=value
export const allEmployeeApi = async(searchkey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allemployee?search=${searchkey}`,"",reqHeader)
}



//delete 
export const deleteEmployeeApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}

//edit 
export const editEmployeeApi = async(employeeid,reqBody,reqHeader)=>{
        return await commonApi('PUT',`${serverUrl}/edit-employee/${employeeid}`,reqBody,reqHeader) 
    }

