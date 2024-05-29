import { useEffect } from "react";

// RTK QUERY
import { useDeleteSinglePostMutation } from "../features/PostApiSlice/PostApiSlice";

// REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// refetch State

// Redux actions
import { revealLoading } from "../features/showPagesSlice/revealSlice";
import { triggerRefetch } from "../features/refetchSlice/refetchSlice";

import toast from "react-hot-toast";

const useDeleteSinglePostMutationWithEffects = () => {
  // dispatch
  const dispatch = useDispatch();

  const [
    deleteSinglePost,
    {
      error: deleteSinglePostError,
      isSuccess: isDeleteSinglePostSuccess,
      isError: isDeleteSinglePostError,
      isLoading: isDeleteSinglePostLoading,
    },
  ] = useDeleteSinglePostMutation();

  useEffect(() => {
    console.log("isDeleteSinglePostSuccess: ", isDeleteSinglePostSuccess);
    if (isDeleteSinglePostSuccess) {
      toast("Post deleted successfully!", {
        icon: "🗑️",
      });
      dispatch(triggerRefetch());
    }
  }, [isDeleteSinglePostSuccess]);

  useEffect(() => {
    console.log(deleteSinglePostError);
  }, [deleteSinglePostError]);

  return {
    deleteSinglePost,
  };
};

export default useDeleteSinglePostMutationWithEffects;
