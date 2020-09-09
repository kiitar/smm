export const deleteKeywords = `
query deleteKeywords(
    $keywords_id:Int!
    $users_id:Int!
    $project_id:Int!
  ){
    deleteKeywords(
        keywords_id:$keywords_id
        users_id:$users_id
        project_id:$project_id
    ){
      message
    }
  }`;
