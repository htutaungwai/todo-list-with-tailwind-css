import { useEffect } from "react";

// RTK QUERY
import { useDeleteSinglePostMutation } from "../features/PostApiSlice/PostApiSlice";

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

  useEffect(() => {
    console.log("isDeleteSinglePostSuccess");
    if (isDeleteSinglePostSuccess) {
      toast("Post deleted successfully!", {
        icon: "🗑️",
      });
      dispatch(triggerRefetch());
    }
  }, [isDeleteSinglePostSuccess]);

  useEffect(() => {
    if (isDeleteSinglePostLoading) {
      dispatch(revealLoading(true));
    }
  }, [isDeleteSinglePostLoading]);

  return {
    deleteSinglePost,
  };
};

export default useDeleteSinglePostMutationWithEffects;
