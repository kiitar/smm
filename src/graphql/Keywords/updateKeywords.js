export const updateKeywords = `
query updateKeywords(
    $keywords_id:Int!
    $name:String!
    $project_id:Int!
    $users_id:Int!
    $keywords:[updateKeywordsInput]
  ){
    updateKeywords(
        keywords_id:$keywords_id
        name:$name
        project_id:$project_id
        keywords:$keywords
        users_id:$users_id
    ){
      message
    }
  }`;
