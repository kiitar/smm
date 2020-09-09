export const loginPassword = `
query loginPassword(
  $id:Int!
  $checksum:String!
  $password:String!
){
  loginPassword(
    id:$id
    checksum:$checksum
    password:$password
  ){
    refresh_token
    data{
        id
    }
  }
}`;
