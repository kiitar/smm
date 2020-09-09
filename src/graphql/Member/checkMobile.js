export const checkMobile = `
query checkMobile(
  $mobile:String!
){
  checkMobile(
    mobile:$mobile
  ){
    data{
      id
      name
      mobile
      line_id
      channel_id
      incorrect
      is_enable
      status
      created_at
    }
  }
}`;
