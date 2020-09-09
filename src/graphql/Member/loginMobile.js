export const loginMobile = `
query loginMobile(
  $mobile:String!
){
  loginMobile(
    mobile:$mobile
  ){
    checksum
    data{
        id
    }
  }
}`;
