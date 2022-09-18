const apiUrl = "https://jsonplaceholder.typicode.com/users";

const fetctAPIs = (ourFetchUrl)=>{
  fetch(ourFetchUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let employeedetails = data;

    console.log(employeedetails)

   let tab = 
   `<tr>
     <th>Name</th>
     <th>Office</th>
     <th>Position</th>
     <th>Salary</th>
    </tr>`;

// Loop to access all rows 

   employeedetails.map((employeedetail)=>{
    tab += `<tr> 
    <td>${employeedetail.name} </td>
    <td>${employeedetail.username}</td>
    <td>${employeedetail.email}</td> 
    <td>${employeedetail.phone}</td>          
</tr>`;
    
    });
   
        document.getElementById('employees').innerHTML=tab;  
        loading();
  }).catch( (error)=> {
    console.log(error);
  });

}

  const loading = ()=>{
    document.getElementById('loading').style.display = 'none';
  };


  //callinng our APIs function.

  setTimeout(()=>{
    fetctAPIs(apiUrl);
  }, 5000)