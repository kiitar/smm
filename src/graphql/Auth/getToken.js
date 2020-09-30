export const getToken = `
query getToken($id:Int!,$checksum:String!,$password:String!){
    getToken(id:$id,checksum:$checksum,password:$password){
      refresh_token
      permissions {
          page
          allow
      }
  }
}`;
