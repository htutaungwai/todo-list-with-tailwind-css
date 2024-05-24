import { useEffect } from "react";

// RTK QUERY
import {
  useDeleteSinglePostMutation,
  useGetAllPostsQuery,
} from "../features/PostApiSlice/PostApiSlice";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// refetch State

// Redux actions
import { revealLoading } from "../features/showPagesSlice/revealSlice";
import { triggerRefetch } from "../features/refetchSlice/refetchSlice";

const useDeleteSinglePostMutationWithEffects = () => {
  // dispatch
  const dispatch = useDispatch();

  const [
    deleteSinglePost,
    {
      isSuccess: isDeleteSinglePostSuccess,
      isError: isDeleteSinglePostError,
      isLoading: isDeleteSinglePostLoading,
    },
  ] = useDeleteSinglePostMutation();

  const { isLoading: isRefetchLoading, isSuccess: isRefetchSuccess } =
    useGetAllPostsQuery();

  return {
    deleteSinglePost,
  };
};

export default useDeleteSinglePostMutationWithEffects;
