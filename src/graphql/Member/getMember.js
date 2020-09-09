export const getMember = `
query getMember(
  $id:Int
  $mobile:String
){
  getMember(
    id:$id
    mobile:$mobile
  ){
    refresh_token
    data{
        id
        name
        mobile
        line_id
        channel_id
        incorrect
        is_enable
        reset_password
        status
        created_at
    }
  }
}`;
