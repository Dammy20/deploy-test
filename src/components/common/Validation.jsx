let regexValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Validation = (values) => {
    let errors = {}
    if (!values.fullname) {
        errors.fullname = "Fullname is required"
    }
    else {
        errors.fullname = null
    }
    if (!values.lastname) {
        errors.lastname = "Lastname is required"
    }
    else {
        errors.lastname = null
    }
    if (!values.phonenumber) {
        errors.phonenumber = "phonenumber is required"
    }
    else {
        errors.phonenumber = null
    }
    if (!values.email) {
        errors.email = "Email is required"
    }
    else {
        errors.email = null
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Pasword must have 8 characters"
    }
    else {
        errors.password = null
    }
    if (values.confirmPassword != values.password) {
        errors.confirmPassword = "Password does not match"
    } if (!regexValidate.test(values.email)) {
        errors.email = "Email is invalid"
    }
    return errors

}

export default Validation;
