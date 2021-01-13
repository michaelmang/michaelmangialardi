import { useMutation, useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { Fragment } from "react"
import { useToggle } from "react-use"
import Pow from "../images/pow.svg"
import CollapsedPow from "../images/pow_collapsed.svg"

const GET_LIKES = gql`
  query($slug: String!) {
    analytics(where: {slug: {_eq: $slug}}) {
      likes
    }
  }
`

const INCREMENT_LIKES = gql`
  mutation ($slug: String!) {
    update_analytics(where: {slug: {_eq: $slug}}, _inc: {likes: 1}) {
      returning {
        likes
      }
    }
  }
`

export default function LikeButton({ slug }) {
  const [liked, toggleLiked] = useToggle(false)
  
  const { loading, data } = useQuery(GET_LIKES, {
    variables: { slug },
  })

  const [incrementLikes, { data: incrementedData }]= useMutation(INCREMENT_LIKES);

  const likes = incrementedData?.update_analytics?.returning[0]?.likes || data?.analytics[0]?.likes

  return (
    <Fragment>
      {!liked && (
        <Pow
          className="cursor-pointer h-10 w-10 md:h-16 md:w-16 transition-all transform active:-translate-y-2"
          onClick={() => {
            toggleLiked()
            incrementLikes({
              variables: { slug }
            })
          }}
        />
      )}
      {liked && (
        <CollapsedPow className="h-10 w-10 md:h-16 md:w-16" />
      )}
      {!loading && !incrementLikes.loading && (
        <div className="flex justify-center text-dark dark:text-light text-lg opacity-75">
          {likes}
        </div>
      )}
    </Fragment>
  )
}
