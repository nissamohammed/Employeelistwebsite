import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import './dashboard.css'
import { serverUrl } from '../services/serverUrl';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import Addemployee from '../components/Addemployee';
import Editemployee from '../components/Editemployee';
import { allEmployeeApi, deleteEmployeeApi } from '../services/allApi'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';

function Dashboard() {
  //const [istoken ,setistoken] = useState("")

  //to get loginuser name
  const [user,setuser]= useState("")

 const[allemployee,setallemployee] = useState([])
 const[searchkey,setsearchkey]=useState("")//search box

 //delete
 const [deleteStatus, setdeleteStatus] = useState(false)

// State for sorting
const [sortField, setSortField] = useState('id'); // Default sort by 'id'
const [sortOrder, setSortOrder] = useState('asc'); // Default sort order is 'ascending'


 const getAllemployee = async()=>{
  try{
  if(sessionStorage.getItem("token")){
    const token = sessionStorage.getItem("token")
  //to verify token from backend that why we use reqheader
  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`//for token authentication 
  }
  const result = await allEmployeeApi(searchkey,reqHeader)
   console.log('API Response:',result);
   if(result.status == 200){
    setallemployee(result.data)
   }else {
    console.error('Error in API response:', result);
  }
}
  }catch(error){
    console.error('Error fetching employees:', error);
  }
}
console.log(allemployee);


//delete the employee list item
  const handleDelete =async(id)=>{
    const result = await deleteEmployeeApi(id)
    console.log(result);
    if(result.status == 200){
      setdeleteStatus(true)
    }
  }

/*useEffect(() => {
  if (sessionStorage.getItem("token")) {
    setistoken(sessionStorage.getItem("token"))
  }
},[])*/

useEffect(()=>{
  if(sessionStorage.getItem("existingUser")){
    setuser(JSON.parse(sessionStorage.getItem("existingUser")).username)
  }
},[])

useEffect(()=>{
  getAllemployee()
  setdeleteStatus(false)
},[searchkey,deleteStatus])
console.log(searchkey);

// Sort the employee list
const handleSort = (field) => {
  const order = (sortField === field && sortOrder === 'asc') ? 'desc' : 'asc';
  setSortField(field);
  setSortOrder(order);

  const sortedEmployees = [...allemployee].sort((a, b) => {
    if (order === 'asc') {
      return a[field] > b[field] ? 1 : -1;
    } else {
      return a[field] < b[field] ? 1 : -1;
    }
  });
  setallemployee(sortedEmployees);
};

  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='text-light  fs-4'>
          <FontAwesomeIcon icon={faUsers} beatFade className='fa-2x me-3' />
            Home
          </Navbar.Brand></Link>

           <button className='btn text-light'> Employee List</button>
           <span className='text-light fw-bolder' style={{textTransform:'capitalize'}}>{user}</span> 
          <Link to={'/'}><button className='btn btn-warning'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button></Link>
          
          </Container>
      </Navbar>


      <div>
        <div className='d-flex m-4 justify-content-end '>
          <h4 className='me-3'>Total Count : {allemployee?.length} </h4>
          <Addemployee/>
        </div>
       <div className='adminbg'>
        <div className="admin-dashboard">
          <h2>Employee List</h2>
          {/*search filter */}
          <input type="text"  placeholder='Enter Search keyword.. Eg: name' className='form-control w-75 ms-5  border m-3 rounded-5' onChange={(e)=>setsearchkey(e.target.value)}/>
          
          

          {/* Employee list Table */}
          <table className="complaint-table">
            <thead>
              <tr>
              <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
                    ID {sortField === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
                <th>Image</th>
                <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                    Name {sortField === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
                    Email {sortField === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
                  </th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Create Date</th>
                <th>Action</th>
      
              </tr>
            </thead>
            <tbody>

           {/* <tr >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>*/}
             {allemployee?.length > 0 ? (     
              allemployee?.map((item,index) => ( 
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item?.empimage? (
                        <img src={`${serverUrl}/uploads/${item?.empimage}`} alt="No Employee image" width={'50px'} height={'50px'} />
                      ) : (
                        <span>No Image</span>
                      )}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.mobile}</td>
                  <td>{item?.designation}</td>
                  <td>{item?.gender}</td>
                  <td>{item?.course}</td> 
                  <td>{item?.createdAt}</td>
                  <td>
                        <button className="accept-btn">
                          <Editemployee employeelist={item}/>
                        </button>
                        <button className="reject-btn m-3" onClick={()=>handleDelete(item?._id)}>
                        <FontAwesomeIcon icon={faTrashCan} className='me-2'/> 
                        </button>   
                  </td>
                </tr>
              ))
            ) : (
              <tr>
               <td colSpan="10">No employees found</td>
              </tr>

            )}


              
            </tbody>
          </table>
        </div>
      </div>


      </div>


    </>
  )
}

export default Dashboard