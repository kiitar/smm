export const getSummary = `
query getSummary(
    $keywords_id:Int
    $start_date:String!
    $end_date:String!
    ){
    getSummary(
      keywords_id:$keywords_id,
      start_date:$start_date
      end_date:$end_date
    ){
      most_popular{
        sources_reach {
            id
            sources
            title
            short_content
            post_date
        }
        sources_date {
            id
            sources
            title
            short_content
            post_date
        }
      }
      summary {
          name
          count
      }
      graph_sources {
          labels
          datasets {
              label
              data
              backgroundColor
              borderColor
          }
      }
      graph_sentiment {
          labels
          datasets {
              label
              data
              backgroundColor
              borderColor
          }
      }
      most_site {
        sources_id
        site
        influencer_score
        mentions
        reach
      }
      stats {
        sources_id
        site
        mentions
      }
      sources {
          sources
          count
      }
      word_cloud {
          text
          value
      }
  }
}`;
