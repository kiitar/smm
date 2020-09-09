export const updateMember = `
mutation updateMember(
  $id:Int!
  $is_enable: Boolean
  $status: String
  $password:String
){
  updateMember(
    id:$id
    is_enable:$is_enable
    status:$status
    password:$password
  ){
    refresh_token
    data{
        id
        status
    }
  }
}`;
