# Angular-5-Tutorials
Angular 5 CRUD operation integrated with Microsoft Asp.net WebAPI and SQL Server DataBase  

Live Demo <a href="http://www.angular5tutorials.somee.com/" target="_blank">Click here</a><br/>

<b>Overview</b><br>
In this project i created simple website using Angular-5 and Bootstrap design. to store data i'm using SQL Server 2014 and to interact website with the database i have created .Net Mvc WebAPI as a services which store and retrieve all the data from database to the website.
 

<b>Environment setup</b><br>
<b>Step 1:</b> Download Sql <a href="https://github.com/RajanMistry88/Asp.Net-Mvc-Tutorials/tree/master/MvcTutorial/DataBase" target="_blank">Database</a> file and Restore or
Create Database in SQL Server. i have already added database bakup file in MvcTutorial >> DataBase >> MvcTutorial.bak 
and also added a Script file MvcTutorialscript.<br><b>Note: This my common and single Database for all the projects.(ex: if i create account using mvc application and login with angular aplicatoin it work because database is common for both the websites.</b>

<b>Step2:</b> After generating  database Download or clone <a href="https://github.com/RajanMistry88/Asp.Net-Mvc-WebAPI-Tutorials" target="_blank">.Net Mvc WebAPI</a> and configure it with the Database for more deatils how to configure Database with Project read the <a href="https://github.com/RajanMistry88/Asp.Net-Mvc-Tutorials" target="_blank">MVC Project README.md</a>  

<b>Step 3:</b> Now Download or clone this <a href="https://github.com/RajanMistry88/Angular-5-Tutorials" target="_blank">Angular-5</a> Project here you need to remember few things.<br>
            1.Change WebAPI Path in HttpManager.module.ts file in Provider folder.<br>
            2.if you use local machine then run the WebAPI use that path in local path in HttpManager.module.ts<br>
            3.Extract Angular Project then open cmd run Project with command "ng serve".<br> 
			      4.This <a href="https://drive.google.com/open?id=1fD8R-Bv_WE0IYait7kmlFdo7rkULVG0a" target="_blank">Angular Project.rar</a> folder is complete setup file for Angular-5. will use this for other project also just replace you src folder
            
<b>Step 4:</b> You can use this <a href="https://drive.google.com/open?id=1fD8R-Bv_WE0IYait7kmlFdo7rkULVG0a" target="_blank">Angular Project.rar</a> file for any other project you don't need to required any software. In this folder every pre installed NodeJS, Angular-5, and Visual Code, so everything is there you can use it any where you want. you don't need to reinstall all the software in any other computer.

<ul><b>Topic Cover in this Project</b>
  <li><b>(Routing, HttpClient, Form Validation, Service, SweetAlert, JQuery, Session Manage)</b></li>
  <li>User Registration (Insert Operation)</li>
  <li>Login (Authentication and Session Managing Operation)</li>
  <li>Forgot Password (Authenticate and Update Operation)</li>
  <li>Active User Account (Edit and Update Operation)</li>
  <li>Profile Update (Edit and Update Operation)</li>
  <li>Change Password (Create New Password Operation)</li>
  <li>Account (Delete Operation | Deactivate Operation)</li>
  <li>Logout (Session Dismiss)</li>
</ul>

