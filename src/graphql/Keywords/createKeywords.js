export const createKeywords = `
query createKeywords(
    $project_id:Int!
    $users_id:Int!
    $keywords:[createKeywordsInput]
  ){
    createKeywords(
        project_id:$project_id
        keywords:$keywords
        users_id:$users_id
    ){
      message
    }
  }`;
