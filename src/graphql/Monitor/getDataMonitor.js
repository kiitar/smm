export const getDataMonitor = `
query getDataMonitor(
    $keywords_id:Int
    $sources_filter:[Int]
    $sentiment_filter:[String]
    $offset:Int,
    $limit:Int!
    $start_date:String!
    $end_date:String!
    ){
    getDataMonitor(
      keywords_id:$keywords_id,
      sources_filter:$sources_filter,
      sentiment_filter:$sentiment_filter,
      offset:$offset,
      limit:$limit
      start_date:$start_date
      end_date:$end_date
    ){
      data_graph {
          labels
          datasets {
              label
              data
              backgroundColor
              borderColor
          }
      }
      rows
      data_info {
        id
        keywords_id
        domain
        url
        title
        short_content
        author
        post_date
        sources_id
        is_delete
        e_like
        e_dislike
        e_care
        e_haha
        e_wow
        e_sad
        e_angry
        sentiment
        status
        created_at
      }
  }
}`;
