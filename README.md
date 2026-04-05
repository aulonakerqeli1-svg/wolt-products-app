📦 Wolt Products Web App

Wolt Products Web App is a simple web application for browsing products (food recipes) with user registration, login, shopping cart, and product details. Built with HTML, Tailwind CSS, JavaScript (ES Modules), and integrated with TheMealDB API.

📌 Features
Navigation menu changes based on user status (logged-in / guest)
Displays product categories and products by category
Responsive product grid (image + name + link to details)
Product page shows name, category, tags, video, and instructions
User registration and login with email/password validation
Shopping cart saved in localStorage
Footer with logo and social links
💻 File Structure
/project-root
│
├─ index.html                 
├─ categories.html            
├─ products.html              
├─ product.html               
├─ register.html              
├─ login.html                 
│
├─ assets/
│   ├─ css/output.css         
│   └─ images/logo.png        
│
├─ modules/
│   ├─ Header.js
│   └─ Footer.js
│
├─ helpers/
│   ├─ url.js                 
│   ├─ validators.js          
│   └─ tags.js                
│
└─ utils/dynamicListener.js  
⚡ Technologies Used
HTML5 & CSS3 (Tailwind)
JavaScript (ES Modules)
Axios for API requests
localStorage for users and cart data
YouTube embed for videos
Font Awesome for icons
🚀 How to Use
Clone the repository:
git clone https://github.com/username/wolt-products-app.git
Open index.html in your browser or use Live Server in VS Code.
Browse categories and products.
Register to manage the shopping cart and dashboard.
📝 Notes
Educational project for practicing JavaScript and Tailwind
Data is stored locally in localStorage
Video embed only works for valid YouTube links
