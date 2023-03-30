const validation = (values) => {

    let errors = {}
    
    if (!values.name ) {

        errors.name = "Name Required"
    }
    else if (values.name.length < 5) {
        errors.name = "Name must be more than 5 char"
    }
    if (!values.password) {

        errors.password = "Password Required"
    }
    else if (values.password.length < 8) {
        errors.name = "Password must be more than 9 char"
       
    }
    if (!values.email) {

        errors.email = "Email Required"
    }
    else if (values.email.length < 8) {
        errors.name = "Password must be more than 9 char"        
      const array=[{name:values.name,email:values.email,password:values.password}]
      console.log(array)
      sessionStorage.setItem('user',JSON.stringify({'name':values.name,'email':values.email,'password':values.password}))
        // history.push("/Login")
    }
    return errors
    
}
export default validation