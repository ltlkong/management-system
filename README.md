# E-Commerce management system

To start the project you need to restore the database and type "serve -s -l 3005 build" in react-admin folder and "dotnet run" in the api folder

Used technologies
* React
* Less
* Antd

## Login page
I used 'Antd' Form component to make a basic structure of a login form, then I used 'Less' to write the style of the login page. In the backend I used Sql and .Net Core made a basic working database, I created LoginController, a Model LoginStatus and a VertifyUser class to handle the alogorithm. In the front-end the login form gets the user's username and password, and send them to the backend by 'Ajax',
in the back-end, it gets the data from the front-end and verify the data and send the response object back, which includes status, message and userData. if the data are valid, then in the front-end page, it will store the userData in the cookie, and bring the user to the admin page, only userData exist in the cookie, the user can access the admin page.
In the admin page, I used Nav component from 'Antd' to make a navigation bar, and I made a nav config js file to let the nav items are rendered dynamically. In the header component I used Weather Api to fetch the local weather information ("https://www.weatherapi.com/").
The admin page has 8 sub pages:
* Home
* Category
* Product
* User
* Role
* Bar Chart
* Pie Chart
* Line Chart
The back-end is unfinished, so in the front-end, it can only show the data from the back-end which is the data in the sql server, the logic is sending the userData from the cookie to the back-end, the backend verify the identity and send the response back. I installed react-chartkick fro the npm, the charts are not working right now, they only show the test data.


