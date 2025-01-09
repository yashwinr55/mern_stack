<html>
    <head>

    </head>
    <body>
        <h2>Form with Validation</h2>
        <form id="myForm" style="text-align: center;">

            <div id="form-one" style="margin-bottom: 20px;">
                <label for="username" style="display: inline-block; width: 100px;">Username :</label>


           <input type="text" id="username" name="username" style="width: 200px;">

                <div class="error" id="usernameError" style="color: red;"></div>
            </div>

            <div id="form-two" style="margin-bottom: 20px;">
                <label for="email" style="display: inline-block; width: 100px;">Email :</label>
                <input type="email" id="email" name="email" style="width: 200px;">
                <div class="error" id="emailError" style="color: red;"></div>
            </div>

            <div id="form-three" style="margin-bottom: 20px;">
                <label for="password" style="display: inline-block; width: 100px;">Password :</label>
                <input type="password" id="password" name="password" style="width: 200px;">
                <div class="error" id="passwordError" style="color: red;"></div>
            </div>

            <button type="submit" style="margin-top: 20px;">Submit</button>
        </form>
        <script>
            document.getElementById("myForm").addEventListener("submit",function(event){
                event.preventDefault();

                document.getElementById("usernameError").textContent="";
                document.getElementById("emailError").textContent="";
                document.getElementById("passwordError").textContent="";
                const username = document.getElementById("username").value.trim();
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value.trim();
                let Valid = true;

                //Username Validation
                if(username==""){
                    document.getElementById("usernameError").textContent="username is required";
                    Valid=false;
                }
                //Email validation
                if(email==""){
                    document.getElementById("emailError").textContent="Email is required";
                    Valid=false;
                }
                //Password Validation
                if(password==""){
                    document.getElementById("passwordError").textContent="Password is required";
                    Valid=false;
                }
                if(Valid){
                    alert("Form submitted successfully");
                }
            });
        </script>
    </body>
</html>