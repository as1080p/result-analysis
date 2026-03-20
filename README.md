📊 Result Analysis System (MERN Stack)
======================================

A full-stack web application that allows students to view their academic performance and teachers to manage marks efficiently. The system provides detailed analysis, including average score, pointer calculation, pass/fail status, and downloadable PDF reports.

🚀 Features
-----------

### 👨‍🎓 Student

*   Secure login
    
*   View subject-wise marks
    
*   Automatic calculation of:
    
    *   Average score
        
    *   Pointer (out of 10)
        
    *   Pass/Fail status per subject
        
    *   Overall result (SUCCESSFUL / UNSUCCESSFUL)
        
*   Download marks report as PDF
    

### 👩‍🏫 Teacher

*   Secure login
    
*   Add/update student marks
    

### ⚙️ Admin (Backend only)

*   Add students, teachers, and subjects manually via API
    

🛠️ Tech Stack
--------------

**Frontend:**

*   React.js
    
*   Axios
    
*   CSS (custom styling)
    
*   @react-pdf/renderer (PDF generation)
    

**Backend:**

*   Node.js
    
*   Express.js
    
*   MongoDB (Mongoose)
    

📁 Project Structure
--------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   result-analysis/│├── Backend/│   ├── models/│   ├── routes/│   ├── services/│   ├── server.js│   └── package.json│├── Frontend/│   ├── src/│   │   ├── Components/│   │   ├── Pages/│   │   ├── axios.js│   │   └── App.js│   └── package.json│└── README.md   `

⚙️ Installation & Setup
-----------------------

### 1️⃣ Clone the repository

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone cd result-analysis   `

### 2️⃣ Backend Setup

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd Backendnpm install   `

Create a .env file:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PORT=5000MONGO_URI=your_mongodb_connection_string   `

Run backend:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm start   `

### 3️⃣ Frontend Setup

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd Frontendnpm installnpm start   `

🔗 API Endpoints
----------------

MethodEndpointDescriptionPOST/api/studentLoginStudent loginPOST/api/teacherLoginTeacher loginPOST/api/addMarksAdd marksGET/api/getMarks?student\_email=EMAILFetch marks

📈 Marks Analysis Logic
-----------------------

*   Each subject is out of **80 marks**
    
*   **Pass Criteria:** ≥ 32 marks per subject
    
*   **Fail Criteria:** < 32 marks in any subject
    
*   pointer = (average / 80) \* 10
    
*   **Overall Result:**
    
    *   FAIL in any subject → UNSUCCESSFUL
        
    *   Pass in all subjects → SUCCESSFUL
        

📄 PDF Feature
--------------

*   Students can download their marks report as a PDF
    
*   Implemented using @react-pdf/renderer
    

🧠 Key Learnings
----------------

*   Full-stack integration (React + Express + MongoDB)
    
*   REST API development
    
*   State management and API handling with Axios
    
*   Data visualization and analysis logic
    
*   PDF generation in React
    

⚠️ Notes
--------

*   Ensure MongoDB is running before starting backend
    
*   Do **not** include node\_modules or .env in the zip/repo
    
*   Use .env.example for reference