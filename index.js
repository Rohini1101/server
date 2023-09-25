function clicktoZoomIn() {
    document.getElementById("text_design").style.fontSize = "1.50rem";
    document.getElementById("footer").style.fontSize = "13px"

};
function clicktoOriginal() {
    document.getElementById("text_design").style.fontSize = "1.75rem";
    document.getElementById("footer").style.fontSize = "15px"
}

function clicktoZoomOut() {
    document.getElementById("text_design").style.fontSize = "2.5rem";
    document.getElementById("footer").style.fontSize = "18px"
}




document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const changeColorButton = document.getElementById("changeColorButton");
    const header2_section = document.getElementById("header2_section");

    changeColorButton.addEventListener("click", function () {
        header.style.backgroundColor = "#343434";
        header.style.color = "white";
        header.style.borderBottom = "1px solid white"
        document.getElementById("changeColorToOriginal").style.color = "white";
        document.getElementById("gallarySection").style.backgroundColor = "#343434";
        document.getElementById("gallarySection").style.color = "white";

        document.getElementById("gallaryDiv_1").style.borderRight = "2px solid white"


        footer.style.backgroundColor = "#343434";
        footer.style.color = "white"

        header2_section.style.backgroundColor = "#343434";
        header2_section.style.color = "white"
        header2_section.style.borderBottom = "1px solid white"

        document.getElementById("about_section1").style.backgroundColor = "#2B2B2B"
        document.getElementById("about_section2").style.backgroundColor = "#2B2B2B"
        document.getElementById("about_section3").style.color = "white";


        var imageElement = document.getElementById("about_sectionIMG");
        var newImageSrc = "./images/MH-map-02.png";
        imageElement.src = newImageSrc;
        imageElement.alt = "New Image Alt Text";

        document.getElementById("caroural_2").style.backgroundColor = "black"
        document.getElementById("caroural_2").style.color = "white"

        document.getElementById("otherScheme").style.backgroundColor = "black"
        document.getElementById("otherScheme").style.color = "white"


        var anchorElements = document.getElementsByTagName("a");
        var newTextColor = "white";

        for (var i = 0; i < anchorElements.length; i++) {
            anchorElements[i].style.color = newTextColor;
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const changeColorToOriginal = document.getElementById("changeColorToOriginal");



    changeColorToOriginal.addEventListener("click", function () {
        const change2ndA = document.getElementById("myAnchor");

        change2ndA.style.color = "red";
        header.style.backgroundColor = "lightgray";
        footer.style.backgroundColor = "white";
        header.style.color = "black";
        footer.style.color = "black";


        document.getElementById("gallarySection").style.backgroundColor = "white";
        document.getElementById("gallarySection").style.color = "black";
        document.getElementById("gallaryDiv_1").style.borderRight = "2px solid lightgray";
        header2_section.style.backgroundColor = "white";
        header2_section.style.color = "black"
        header2_section.style.borderBottom = "1px solid white"

        document.getElementById("about_section1").style.backgroundColor = "#989C9B"
        document.getElementById("about_section2").style.backgroundColor = "#989C9B"
        document.getElementById("about_section3").style.color = "black";


        var imageElement = document.getElementById("about_sectionIMG");
        var newImageSrc = "./images/MH-map-fotor-bg-remover-2023091191946.png";
        imageElement.src = newImageSrc;
        imageElement.alt = "New Image Alt Text";

        document.getElementById("caroural_2").style.backgroundColor = "white"
        document.getElementById("caroural_2").style.color = "black"


        document.getElementById("otherScheme").style.backgroundColor = "white"
        document.getElementById("otherScheme").style.color = "black"

        var anchorElements = document.getElementsByTagName("a");
        var newTextColor = "black";

        for (var i = 0; i < anchorElements.length; i++) {
            anchorElements[i].style.color = newTextColor;
        }
    });
});



var nameInput;
var emailInput;
var text

function showModal() {
    document.getElementById("myModal").style.display = "block";
}
function showModal2() {
    document.getElementById("myModal2").style.display = "block";
}




function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
    document.getElementById("error").innerText = "";

}


function submitForm() {
    nameInput = document.getElementById("name").value
    emailInput = document.getElementById("email").value;
    textlInput = document.getElementById("text").value

    if (nameInput !== "" && emailInput !== "" && textlInput !== "") {
        showModal();
        dismissModal()

    } else {
        document.getElementById("error").innerText = "All field is mandatory";
    }

}
function dismissModal() {
    setTimeout(function () {
        closeModal();

    }, 3000);
}

function clearEmail() {
    if (nameInput !== "" || textlInput !== "" || nameInput == "" || textlInput == "") {
        document.getElementById("error").innerText = "";

    }

}
function clearInput() {
    if (emailInput !== "" || textlInput !== "" || emailInput == "" || textlInput == "") {
        document.getElementById("error").innerText = "";

    }
}
function clearText() {
    if (nameInput !== "" || emailInput !== "" || nameInput == "" || emailInput == "") {
        document.getElementById("error").innerText = "";

    }
}


function goTosignIN() {
    document.getElementById("registration_form").style.display = "none";
    document.getElementById("navbarContent").style.display = "none";
    document.getElementById("carousal_02").style.display = "none";
    document.getElementById("gallarySection").style.display = "none";
    document.getElementById("about_section1").style.display = "none";
    document.getElementById("caroural_2").style.display = "none";
    document.getElementById("otherScheme").style.display = "none";
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("header2_section").style.borderBottom = "1px solid lightgray"
    document.getElementById("signInBtn").innerText = "Back"

    document.getElementById("loginForm").style.display = "block"
    document.getElementById("loginForm1").style.display = "block"



}

function backToSignIn() {
    document.getElementById("registration_form").style.display = "none";
    document.getElementById("forgotpswdSection").style.display = "none"

    document.getElementById("navbarContent").style.display = "block";
    document.getElementById("carousal_02").style.display = "block";
    document.getElementById("gallarySection").style.display = "block";
    document.getElementById("gallarySection").style.display = "flex";

    document.getElementById("about_section1").style.display = "block";
    document.getElementById("about_section1").style.display = "flex";

    document.getElementById("caroural_2").style.display = "block";
    document.getElementById("otherScheme").style.display = "block";
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("header2_section").style.borderBottom = "1px solid lightgray"
    document.getElementById("signInBtn").innerText = "Sign In"

    document.getElementById("loginForm").style.display = "none"
    document.getElementById("loginForm1").style.display = "none"


}


function loginUser() {
    document.getElementById("forgotpswdSection").style.display = "none";
    var userId = document.getElementById("userID").value;
    var userPassword = document.getElementById("userPassword").value;


    let user_record2 = new Array();
    user_record2 = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []


   if (userId !== "" && userPassword !== ""){
    if (user_record2.some((v) => {return v.email == userId && v.password == userPassword})) {
        document.getElementById("loader").style.display = "block";
            document.getElementById("loginForm").style.display = "none"
            setTimeout(function () {
                document.getElementById("loader").style.display = "none";
    
            }, 2500)
            location.href = "sunEarth.html"
    
            // setTimeout(function () {
            //     document.getElementById("myModal2").style.display = "block";
            // }, 3000)
    
        }else {
                 document.getElementById("myModal2").style.display = "block";

        //alert("lohin fail")

        }

    }  
     else if (userId !== "" && userPassword == "") {
            document.getElementById("errorpswd").innerText = "Password is required"
    
        } else if (userId == "" && userPassword !== "") {
            document.getElementById("errorName").innerText = "User ID is required";
    
        } else if (userId == "" && userPassword == "") {
            document.getElementById("errorpswd").innerText = "Password is required";
            document.getElementById("errorName").innerText = "User ID is required";
    
        }
    
} 


  

    // if (userId !== "" && userPassword !== "") {
    //     document.getElementById("loader").style.display = "block";
    //     document.getElementById("loginForm").style.display = "none"
    //     setTimeout(function () {
    //         document.getElementById("loader").style.display = "none";

    //     }, 2500)

    //     setTimeout(function () {
    //         document.getElementById("myModal2").style.display = "block";
    //     }, 3000)

    // }
    // else if (userId !== "" && userPassword == "") {
    //     document.getElementById("errorpswd").innerText = "Password is required"

    // } else if (userId == "" && userPassword !== "") {
    //     document.getElementById("errorName").innerText = "User ID is required";

    // } else if (userId == "" && userPassword == "") {
    //     document.getElementById("errorpswd").innerText = "Password is required";
    //     document.getElementById("errorName").innerText = "User ID is required";

    // }







function eraseInput() {
    document.getElementById("errorName").innerText = "";
    document.getElementById("errorpswd").innerText = "";
}
function erasePassword() {
    document.getElementById("errorName").innerText = "";
    document.getElementById("errorpswd").innerText = "";
}



function okToInvalid() {
    document.getElementById("userID").value = "";
    document.getElementById("userPassword").value = "";

    document.getElementById("myModal2").style.display = "none";
    document.getElementById("loginForm").style.display = "block"
    document.getElementById("loginForm1").style.display = "block"

}

function createAcc() {
    document.getElementById("loginForm").style.display = "none"
    document.getElementById("loginForm1").style.display = "none";
    document.getElementById("registration_form").style.display = "block"
}

function alreadyReg() {
    document.getElementById("registration_form").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginForm1").style.display = "block"


}

function signIn() {
    document.getElementById("registration_form").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginForm1").style.display = "block"


}





function register() {
    const schoolName = document.getElementById("schoolName1");
    const applicantName = document.getElementById("applicantName1").value;
    const address = document.getElementById("address1").value;
    const mobile = document.getElementById("mobile1").value;
    const landMark = document.getElementById("landMark1").value;
    const city = document.getElementById("city1").value;
    const pinCode = document.getElementById("pinCode1").value;
    const enterEmail = document.getElementById("enterEmail1").value;
    const enterPassword = document.getElementById("enterPassword1").value;
    const accHolderName = document.getElementById("accHolderName1").value;
    const accNo = document.getElementById("accNo1").value;
    const IFSC = document.getElementById("IFSC1").value;
    const BranchName = document.getElementById("BranchName1").value;
    

    

     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    
    if (schoolName !== "" && applicantName !== "" && address !== "" && mobile !== "" && landMark !== "" && city !== "" && pinCode !== "" &&
        enterEmail !== "" && enterPassword !== "" && accHolderName !== ""
         && accNo !== "" && IFSC !== "" && BranchName !== ""){

        if (user_records.some((v) => { return v.email == enterEmail })) {
            //alert("Mail ID is already taken !")
            document.getElementById("myModalRegister").style.display = "block";
        } else {
            user_records.push({
                "email": enterEmail,
                "password": enterPassword
            })
            localStorage.setItem("users", JSON.stringify(user_records));
            document.getElementById("loader").style.display = "block";
            document.getElementById("registration_form").style.display = "none";

            setTimeout(function () {
                document.getElementById("loader").style.display = "none";

            }, 2500)

            setTimeout(function () {
                document.getElementById("myModal4").style.display = "block";
            }, 3000)

            disMissModal2();

    
    }
}
else{
            document.getElementById("schoolName").innerText = "Institute/ School Name is required"
        document.getElementById("applicantName").innerText = "Applicant Name is required"
        document.getElementById("address").innerText = "Address is required"
        document.getElementById("mobile").innerText = "Mobile No. is required"
        document.getElementById("landMark").innerText = "Landmark is required"
        document.getElementById("city").innerText = "Enter City Name"
        document.getElementById("pinCode").innerText = "Pine Code is required"
        document.getElementById("enterEmail").innerText = "Email is required"
        document.getElementById("enterPassword").innerText = "Password is required"
        document.getElementById("accHolderName").innerText = "Account Holder Name is required"
        document.getElementById("accNo").innerText = "Account Number is required"
        document.getElementById("IFSC").innerText = "IFSC Code is required"
        document.getElementById("BranchName").innerText = "Prefered Branch is required"
        document.getElementById("registerBtn").style.display = "none";
    }
    
}

function closeModalRegister() {
    document.getElementById("myModalRegister").style.display = "none";
    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("text").value = "";
    // document.getElementById("error").innerText = "";

}


function disMissModal2() {
    setTimeout(function () {
        closeRegistration();
    }, 5000)
}







function changeFields() {
    document.getElementById("schoolName").innerText = "";
}
function changeFields1() {
    document.getElementById("applicantName").innerText = "";
}
function changeFields2() {
    document.getElementById("address").innerText = "";
}
function changeFields3() {
    const digit10 = document.getElementById("mobile1").value;
    const digitLength = digit10.length;
    if (digitLength == 9) {
        document.getElementById("mobile").innerText = "";

    } else {
        document.getElementById("mobile").innerText = "Please enter a valid 10-digit mobile number.";

    }

}
function changeFields4() {
    document.getElementById("landMark").innerText = "";
}
function changeFields5() {
    document.getElementById("city").innerText = "";
}
function changeFields6() {
    document.getElementById("pinCode").innerText = "";
}
function changeFields7() {
    document.getElementById("enterEmail").innerText = "";
}
function changeFields8() {
    document.getElementById("enterPassword").innerText = "";
}
function changeFields9() {
    document.getElementById("accHolderName").innerText = "";
}
function changeFields10() {
    document.getElementById("accNo").innerText = "";
}
function changeFields11() {
    document.getElementById("IFSC").innerText = "";
}
function changeFields12() {
    document.getElementById("BranchName").innerText = "";
    document.getElementById("registerBtn").style.display = "block";
    document.getElementById("registerBtn").style.marginLeft = "250px";

}
function closeRegistration() {
    document.getElementById("schoolName1").value = "";
    document.getElementById("applicantName1").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("mobile1").value = "";
    document.getElementById("landMark1").value = "";
    document.getElementById("city1").value = "";
    document.getElementById("pinCode1").value = "";
    document.getElementById("enterEmail1").value = "";
    document.getElementById("enterPassword1").value = "";
    document.getElementById("accHolderName1").value = "";
    document.getElementById("accNo1").value = "";
    document.getElementById("IFSC1").value = "";
    document.getElementById("BranchName1").value = "";


    document.getElementById("myModal4").style.display = "none"
    document.getElementById("registration_form").style.display = "block"

}


function forgotPassword() {
    document.getElementById("forgotpswdSection").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginForm1").style.display = "none";
}

function backToLogin() {
    document.getElementById("forgotpswdSection").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginForm1").style.display = "block";
}


function OTPsend() {
    //alert("hello ,,,, , , , , , ");

    var confirmID = document.getElementById("confirmID").value;
    var confirmPswd = document.getElementById("confirmPswd").value;
    var confirmPswd1 = document.getElementById("confirmPswd1").value;

    if (confirmID !== "" && confirmPswd !== "" && confirmPswd1 !== "") {
        if (confirmPswd === confirmPswd1) {

            document.getElementById("forgotpswdSection").style.display = "none";
            document.getElementById("loader1").style.display = "block";

            setTimeout(function () {
                document.getElementById("loader1").style.display = "none";

            }, 2500)

            setTimeout(function () {
                document.getElementById("myModal3").style.display = "block";
            }, 3000)
        } else {
            document.getElementById("CPswd2").innerText = "Password is not match";

        }
    }
    else if (confirmID !== "" && confirmPswd == "") {
        document.getElementById("CPswd1").innerText = "Password is required";

    } else if (confirmID == "" && confirmPswd !== "") {
        document.getElementById("ID1").innerText = "User ID is required";

    } else if (confirmID == "" && confirmPswd == "") {
        document.getElementById("ID1").innerText = "User ID is required";
        document.getElementById("CPswd1").innerText = "Password is required";

    }

}

function clearIdField() {
    document.getElementById("ID1").innerText = "";

}

function clearPswdField() {
    document.getElementById("CPswd1").innerText = "";

}
function clearPswdField1() {
    document.getElementById("CPswd2").innerText = "";



}

function okToInvalidData() {
    document.getElementById("confirmID").value = "";
    document.getElementById("confirmPswd").value = "";
    document.getElementById("confirmPswd1").value = "";
    document.getElementById("forgotpswdSection").style.display = "block";
    document.getElementById("myModal3").style.display = "none";

}


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const passwordInput = document.getElementById("userPassword");

        const togglePasswordIcon = document.querySelector(".bi-eye-slash");

        togglePasswordIcon.addEventListener("click", function () {


            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordIcon.classList.remove("bi-eye-slash");
                togglePasswordIcon.classList.add("bi-eye-fill");
            } else {
                passwordInput.type = "password";
                togglePasswordIcon.classList.remove("bi-eye-fill");
                togglePasswordIcon.classList.add("bi-eye-slash");
            }
        });
    }, 1000);
});



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const passwordInput = document.getElementById("confirmPswd");

        const togglePasswordIcon = document.querySelector(".bi-eye-slash-fill");

        togglePasswordIcon.addEventListener("click", function () {


            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordIcon.classList.remove("bi-eye-slash-fill");
                togglePasswordIcon.classList.add("bi-eye-fill");

            } else {
                passwordInput.type = "password";
                togglePasswordIcon.classList.remove("bi-eye-fill");
                togglePasswordIcon.classList.add("bi-eye-slash-fill");
            }
        });
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const passwordInput = document.getElementById("confirmPswd1");

        const togglePasswordIcon = document.querySelector(".bi-eye-slash-fill");

        togglePasswordIcon.addEventListener("click", function () {


            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordIcon.classList.remove("bi-eye-slash-fill");
                togglePasswordIcon.classList.add("bi-eye-fill");

            } else {
                passwordInput.type = "password";
                togglePasswordIcon.classList.remove("bi-eye-fill");
                togglePasswordIcon.classList.add("bi-eye-slash-fill");
            }
        });
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const passwordInput = document.getElementById("enterPassword1");

        const togglePasswordIcon = document.querySelector(".bi-eye");

        togglePasswordIcon.addEventListener("click", function () {


            if (passwordInput.type === "text") {
                passwordInput.type = "password";
                togglePasswordIcon.classList.remove("bi-eye");
                togglePasswordIcon.classList.add("bi bi-eye");

            } else {
                passwordInput.type = "text";
                togglePasswordIcon.classList.remove("bi bi-eye-slash");
                togglePasswordIcon.classList.add("bi bi-eye-fill");
            }
        });
    }, 1000);
});


























