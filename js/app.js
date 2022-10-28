const login_btn = document.getElementById("login_btn");
const signup_btn = document.getElementById("signup_btn");
login_btn.addEventListener("click", function(e){
    e.preventDefault();
    const email = document.getElementById("email_lgin").value;
    const password = document.getElementById("password_lgin").value;
    if (email == "")
    {
        alert("Please enter your email");
        window.location.reload();
    }
    else if (password == "")
    {
        alert("Please enter your password");
        window.location.reload();
    }
    else
    {
        document.getElementById("login_form").submit();
        // if (email != /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g )
        // {
        //     alert("Please enter a valid email");
        //     window.location.reload();
        // }
        // else
        // {}
        //alert("Login successful");
    }
})
signup_btn.addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name_snup").value;
    const email = document.getElementById("email_snup").value;
    const password = document.getElementById("password_snup").value;
    const confirm_password = document.getElementById("confirm_snup").value;
    if (name == "")
    {
        alert("Please enter your name");
        window.location.reload();
    }
    else if (email == "")
    {
        alert("Please enter your email");
        window.location.reload();
    }
    else if (password == "")
    {
        alert("Please enter your password");
        window.location.reload();
    }
    else if ( confirm_password == "")
    {
        alert("Please confirm your password");
        window.location.reload();
    }
    else if ( password != confirm_password)
    {
        alert("Passwords do not match. Please re-enter your password");
        window.location.reload();
    }
    else
    {
        document.getElementById("signup_form").submit();
            //alert("Signup successful");
    }
});