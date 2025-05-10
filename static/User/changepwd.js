// const oldpwd = document.getElementById('oldPassword');
// const newpwd = document.getElementById('newPassword');
// const confpwd = document.getElementById('confPassword');
// const otpButton = document.getElementById('otpButton');


function viewMessage (message){
    if (message){
        alert(message);
        document.getElementById("passwordForm").reset();
    }
}


const form = document.getElementById('passwordForm');
form.addEventListener('submit', function(event) {

    const newPwd = document.getElementById('newPassword').value;
    console.log(newPwd);
    const confPwd = document.getElementById('confPassword').value;
    // Check new and confirm password matches
    if (newPwd != confPwd) {
        event.preventDefault(); // Prevent form submission
        alert('You entered different passwords. Please make sure they match and try again.');
    }
});


// function generateOTP(){

//     var url = "/api/generateotp/";
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

// }