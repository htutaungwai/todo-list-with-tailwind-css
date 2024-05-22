import { useEffect } from "react";

// RTK QUERY
import {
  useCreateNewPostMutation,
  useGetAllPostsQuery,
} from "../features/PostApiSlice/PostApiSlice";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// refetch State

// Redux actions
import { revealLoading } from "../features/showPagesSlice/revealSlice";
import { triggerRefetch } from "../features/refetchSlice/refetchSlice";

const useCreateNewPostWithEffects = () => {
  // dispatch
  const dispatch = useDispatch();

  const [
    createNewPost,
    {
      data: newPost,
      error: createNewPostError,
      isLoading: isCreateNewPostLoading,
      isSuccess: isCreateNewPostSuccess,
      isError: isCreateNewPostError,
    },
  ] = useCreateNewPostMutation();

  const { isLoading: isRefetchLoading, isSuccess: isRefetchSuccess } =
    useGetAllPostsQuery();

  useEffect(() => {
    console.log("isCreateNewPostLoading use effect");
    if (isCreateNewPostLoading) dispatch(revealLoading(true));
    else {
      dispatch(revealLoading(false));
    }
  }, [isCreateNewPostLoading]);

  useEffect(() => {
    console.log("triggerRefetch useeffect");
    if (isCreateNewPostSuccess && newPost) {
      dispatch(triggerRefetch());
    }
  }, [isCreateNewPostSuccess]);

  return {
    createNewPost,
    newPost,
    createNewPostError,
    isCreateNewPostLoading,
    isCreateNewPostSuccess,
    isCreateNewPostError,
    isRefetchLoading,
    isRefetchSuccess,
  };
};

export default useCreateNewPostWithEffects;
