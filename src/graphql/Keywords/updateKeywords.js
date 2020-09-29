export const updateKeywords = `
query updateKeywords(
    $keywords_id:Int!
    $project_id:Int!
    $users_id:Int!
    $keywords:[updateKeywordsInput]
  ){
    updateKeywords(
        keywords_id:$keywords_id
        project_id:$project_id
        keywords:$keywords
        users_id:$users_id
    ){
      message
    }
  }`;
