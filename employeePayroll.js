let rangeVar = document.getElementById("salary");          
document.addEventListener("change", function(){
     let rangeValue = document.getElementById("salary");
     document.getElementById("salaryOutput").value = rangeValue.value;
});

/* UC9*/ 
class EmployeePayrollData {

    constructor(...params) {
        this.name = params[0];
        this.profileImage = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "**** NAME is Incorrect ****";
    }

    get profileImage() {
        return this._profileImage;
    }

    set profileImage(profileImage) {
        this._profileImage = profileImage;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        let genderRegex = RegExp('^[female|male]+$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else
            throw "**** GENDER is Incorrect ****";
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        let salaryRegx = RegExp('^[1-9][0-9]*$');
        if (salaryRegx.test(salary))
            this._salary = salary;
        else
            throw "**** SALARY is Incorrect ****";

    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let future = new Date();
        future.setDate(future.getDate() + 30);
        if (startDate < new Date() || startDate < future)
            this._startDate = startDate;
        else
            throw "Start Date is Incorrect";
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }


    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Name = " + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}

function save() {
    let employeeName = document.querySelector('#name').value;
    let profileList = document.querySelectorAll('input[name="profile"]');
    let employeeProfileImage;
    for (let image of profileList) {
        if (image.checked) {
            employeeProfileImage = image.value;
            break;
        }
    }

    let genderList = document.querySelectorAll('input[name="gender"]');
    let employeeGender;
    for (let gender of genderList) {
        if (gender.checked) {
            employeeGender = gender.value;
            break;
        }
    }

    let departmentList = document.querySelectorAll('.checkbox:checked');
    let employeeDepartment = new Array();
    for (let department of departmentList) {
        if (department.checked) {
            employeeDepartment.push(department.value);
        }
    }

    let employeeSalary = document.querySelector('#salary').value;

    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let employeeStartDate = new Date(year, month, day);

    let employeeNotes = document.querySelector('#notes').value;

    try {
        let employeePayrollData = new EmployeePayrollData(employeeName, employeeProfileImage, employeeGender, employeeDepartment, employeeSalary, employeeStartDate, employeeNotes);
        console.log(employeePayrollData.toString());
    } catch (e) {
        console.error(e);
    }
}
