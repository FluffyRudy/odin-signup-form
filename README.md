# odin-signup-form
The simple signup form using HTML, CSS and JavaScript

## Project Description
This is simple implementation of project from The Odin Project curriculum. The goal of this project is to apply the knowledge of HTML form structure and designing of it.

## Technologies Used
 - HTML
 - CSS
 - JavaScript

## Installation Instruction
1. **Clone the repository**: First you will need to clone the repository to your local machine. You can do this with following command in terminal
```https://github.com/FluffyRudy/etch-a-sketch.git```

2. **Navigate and open project directory**: Navigate to project directory using filemanager then open index.html in browser and you are all set.

## Features
 - **Form Submission**: The form uses the HTTP POST method to submit data to https://httpbin.org/post. This serves as a demonstration of how data is passed from the client to the server using the POST method. When a user fills out the form and submits it, the entered data is sent to the server and then displayed back to the user, allowing them to see the result of their submission. 

 - **Input Types**: Uses different input types for particular use like text for username, email for user email, number for phone number, password for user password.

 - **Error Message**: Required fields are marked by __*__ and cannot be left empty. If they are left empty, a red border around field may appear.

 - **Response and Display**: Upon successful submission of the form, the data is sent as a POST request to https://httpbin.org/post. The server’s response, which includes the submitted data, is returned in a JSON format and displayed in the browser. This serves as a demonstration of how data is passed from the client to the server and how server responses can be handled and displayed. **Please note that in a real-world application, displaying raw server responses or user-submitted data directly in the browser can pose security risks (such as Cross-Site Scripting attacks)**. However, for the purposes of this simple project, and because httpbin.org is a safe testing service, the JSON response is displayed directly.

 - **Responsive Design**: The form works on various devices and screen sizes.