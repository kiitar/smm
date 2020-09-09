export const getKeywords = `
query getKeywords(
    $offset:Int,
    $limit:Int!,
    $users_id:Int
    ){
    getKeywords(offset:$offset,
      limit:$limit,
      users_id:$users_id){
      rows
      data {
        id 
        project_id
        keyword
        require_keyword
        exclude_keyword
        description
        users_id
        created_at
        users {
            username
        }
      }
  }
}`;
