function validate(){
            var first_name = document.contactus_form.first_name
            var last_name = document.contactus_form.last_name
            var email = document.contactus_form.email
            var phone = document.contactus_form.phone
            var address = document.contactus_form.address
            var gender = document.contactus_form.gender
            var message = document.contactus_form.message


            if (first_name.value.length <=0){
                alert("First name is required");
                first_name.focus();
                return false;
            }
            if (last_name.value.length <=0){
                alert("Last name is required");
                last_name.focus();
                return false;
            }
            if (email.value.length <=0){
                alert("Email is required");
                email.focus();
                return false;
            }
            if (phone.value.length <=0){
                alert("Phone is required");
                phone.focus();
                return false;
            }
            if (address.value.length <=0){
                alert("Address is required");
                address.focus();
                return false;
            }
            if (gender.value.length <=0){
                alert("Gender is required");
                gender.focus();
                return false;
            }
            if (message.value.length <=0){
                alert("Message is required");
                message.focus();
                return false;
            }
            return true;
            }