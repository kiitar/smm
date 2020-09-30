export const updatePassword = `
query updatePassword(
  $id:Int!
  $password:String!
  $token:String!
){
  updatePassword(
    id:$id
    password:$password
    token:$token
  ){
    message
  }
}`;
