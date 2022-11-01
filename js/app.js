document.getElementById("login").addEventListener("submit",function(e){
        e.preventDefault();
        var email = $("#email_lgin").val();
        var password = $("#password_lgin").val();
        if (email == "")
        {
            alert("Please enter your email");
            // window.location.reload();
        }
        else if (password == "")
        {
            alert("Please enter your password");
            // window.location.reload();
        }
        else
        {
            $.ajax({
                url: "login.php",
                method: "POST",
                data: {email:email, password:password},
                success: function(data){
                    alert(data);
                }
            })
        }
    });

document.getElementById("signup").addEventListener("submit",function(e){
    e.preventDefault();
    var name = $("#name_snup").val();
    var email = $("#email_snup").val();
    var password = $("#password_snup").val();
    var confirm_password = $("#confirm_snup").val();
    if (name == "")
    {
        alert("Please enter your name");
        // window.location.reload();
    }
    else if (email == "")
    {
        alert("Please enter your email");
        // window.location.reload();
    }
    else if (password == "")
    {
        alert("Please enter your password");
        // window.location.reload();
    }
    else if ( confirm_password == "")
    {
        alert("Please confirm your password");
        // window.location.reload();
    }
    else if ( password != confirm_password)
    {
        alert("Passwords do not match. Please re-enter your password");
        // window.location.reload();
    }
    else
    {
        $.ajax({
            url: "signup.php",
            method: "POST",
            data: {name:name, email:email, password:password},
            success: function(data){
                if (data == "success")
                {
                    // window.location.reload();
                }
                else
                {
                    alert(data);
                    // window.location.reload();
                }
            }
        })
    }
}); 

// function validateSignUp(){
//     const name = document.getElementById("name_snup").value;
//     const email = document.getElementById("email_snup").value;
//     const password = document.getElementById("password_snup").value;
//     const confirm_password = document.getElementById("confirm_snup").value;
//     if (name == "")
//     {
//         alert("Please enter your name");
//         window.location.reload();
//         return false;
//     }
//     else if (email == "")
//     {
//         alert("Please enter your email");
//         window.location.reload();
//         return false;
//     }
//     else if (password == "")
//     {
//         alert("Please enter your password");
//         window.location.reload();
//         return false;
//     }
//     else if ( confirm_password == "")
//     {
//         alert("Please confirm your password");
//         window.location.reload();
//         return false;
//     }
//     else if ( password != confirm_password)
//     {
//         alert("Passwords do not match. Please re-enter your password");
//         window.location.reload();
//         return false;
//     }
//     else
//     {
//         return true;
//         //document.getElementById("signup").submit();
//             //alert("Signup successful");
//     }
// }
// function validateLogIn(){
//     const email = document.getElementById("email_lgin").value;
//     const password = document.getElementById("password_lgin").value;
//     if (email == "")
//     {
//         alert("Please enter your email");
//         window.location.reload();
//         return false;
//     }
//     else if (password == "")
//     {
//         alert("Please enter your password");
//         window.location.reload();
//         return false;
//     }
//     else
//     {
//         return true;
//         //document.getElementById("login").submit();
//             //alert("Login successful");
//     }
// }