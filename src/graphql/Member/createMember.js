export const createMember = `
mutation createMember(
  $name:String!
  $mobile:String!
  $password:String!
  $line_id: String!
  $channel_id: Int!
){
  createMember(
    name:$name
    mobile:$mobile
    password:$password
    line_id:$line_id
    channel_id:$channel_id
  ){
    data{
        id
        mobile
        incorrect
        is_enable
        status
        created_at
        reference
        ref
    }
  }
}`;
