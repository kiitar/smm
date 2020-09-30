export const confirmRegister = `
query confirmRegister(
  $token:String!
  $email:String!
  $username:String
  $password:String!
  $firstname:String
  $lastname:String
  $phone:String
  $type:String!
){
  confirmRegister(
    token:$token
    email:$email
    username:$username
    password:$password
    firstname:$firstname
    lastname:$lastname
    phone:$phone
    type:$type
  ){
    message
  }
}`;
