let  form1 = document.querySelector("form")
form1.addEventListener("submit",function(){
 getData();
})

let arr = [];

function getData(){
    event.preventDefault()
    let name = document.getElementById("name");
    let employeeid = document.getElementById("employeeID");
    let department = document.getElementById("department");
    let experience = document.getElementById("exp");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mbl");

    let obj = {
       Name : name.value,
       Employeeid : employeeid.value,
       Department : department.value,
       Experience : experience.value,
       Email : email.value,
       Mobile : mobile.value
    }

    console.log(obj);
    arr.push(obj);
    console.log(arr);

    displayData(arr)
}
    let table = document.querySelector("table");
    function displayData(arr){
        var tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        arr.forEach(function(ele,index){
        //   console.log(ele)
         
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
            tdName.textContent =ele.Name
        var tdEmployeeid = document.createElement("td");
            tdEmployeeid.textContent =ele.Employeeid
        var tdDepartment = document.createElement("td");
            tdDepartment.textContent =ele.Department
        var tdExperience = document.createElement("td");
            tdExperience.textContent =ele.Experience
        var tdEmail = document.createElement("td");
            tdEmail.textContent =ele.Email
        var tdMobile = document.createElement("td");
            tdMobile.textContent =ele.Mobile
        var tdRole = document.createElement("td");
            if(ele.Experience > 5){
                tdRole.textContent = "Senior"; 
            }
            else if (ele.Experience > 1 && ele.Experience <= 5){
                tdRole.textContent = "Junior"; 
            }
            else{
                tdRole.textContent = "Fresher"; 
            }
        var tdDelete = document.createElement("td");
            let btn = document.createElement("button");
            btn.textContent = "Delete";
            btn.addEventListener("click",function(){
                deleteData(ele,index)
            });
            
            tdDelete.append(btn);

            tr.append(tdName,tdEmployeeid,tdDepartment,tdExperience,tdEmail,tdMobile,tdRole,tdDelete);
            tbody.append(tr);
            table.append(tbody);
            });

            function deleteData(ele,index){
                arr.splice(index,1);
                displayData(arr);
            }

        
    }

    let filter = document.getElementById("filter");
        filter.addEventListener("change",function(){
            filterData(arr)
        })
        
        function filterData(arr){
            let valFilter = filter.value;
            console.log(valFilter)
            let filterArr = arr.filter(function(ele){
                return ele.Department === valFilter
            })
            console.log(filterArr);
            displayData(filterArr)
        }

        

    
    
    

