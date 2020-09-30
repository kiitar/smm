export const forgotPassword = `
query forgotPassword(
  $email:String!
){
  forgotPassword(
    email:$email
  ){
    message
  }
}`;
