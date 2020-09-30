export const registerUsers = `
query registerUsers($email:String!,$role:String!){
  registerUsers(email:$email,role:$role){
    message
  }
}`;
