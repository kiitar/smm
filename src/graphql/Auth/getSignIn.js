export const getSignIn = `
query getSignIn($email:String!){
    getSignIn(email:$email){
      id
      checksum
  }
}`;
