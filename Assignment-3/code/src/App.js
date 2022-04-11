import React from 'react';
// import logo from './logo.svg';
import './App.css';

const User = {
  Name: 'Alan Ford',
  EmployeeId: '00005152',
  Appointment: '9:00 (24-05-2016)',
  Email: 'alan.form@email.nl',
  phone: '+31123456789',
  status: 'In Progress',
  door: 'Mark',
  time: '10:30',
  date: '(25-05-2016)',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  product_name: "Boltaart Bosbessen",
  product_description:
    "This is some random description about the product mentioned above."
}

var arrow = "<"
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className='header_container'>
        <p id='header_arrow'>{arrow}</p>
        <div className='header_name'> <h3>{User.Name}</h3> <p>{User.EmployeeId}</p></div>
        <div className='button1'><button >Print</button></div>
      </div>
      <div className='customer-info'>
        <Userdetails1 detail_Name={"Appointment"} details={User.Appointment} />
        <Userdetails1 detail_Name={"Email"} details={User.Email} />
        <Userdetails1 detail_Name={"Phone"} details={User.phone} />
      </div>
      <div className='order-info'>
        <div className='status-dot'></div>
        <UserDetails2 detail_Name={"Status"} details={"" + User.status} />
        <UserDetails2 detail_Name={"Door"} details={User.door} />
        <UserDetails2 detail_Name={"Time"} details={User.time} />
        <div className='em_date'>{User.date}</div>
      </div>
      <div className='product-list'>
        <div className='check-box-wrapper'>
          <div className='check-box'></div>
        </div>
        <div className='profileImg'>
          <img src={User.profileImg} alt=''></img>
        </div>
        <div className='side-text-wrapper'>
          <div className='User-role'>{User.product_name}</div>
          <div className='User-summary'>{User.product_description}</div>
          <p id='header_arrow1'>{arrow}</p>
        </div>
      </div>
    </div>
  );
}
const Userdetails1 = ({ detail_Name, details }) => {
  return (
    <div className='employeeDet_Wrapper1'>
      <div className='employee_Detail_Label1'>{detail_Name + "   :"}</div>
      <div className='employee_Detail1'>{details}</div>
    </div>
  )
}
const UserDetails2 = ({ detail_Name, details }) => {
  return (
    <div className='employeeDet_Wrapper2'>
      <div className='employee_Detail_Label2'>{detail_Name + " "}</div>
      <div className='employee_Detail2'>{details}</div>
    </div>
  );
}

export default App;