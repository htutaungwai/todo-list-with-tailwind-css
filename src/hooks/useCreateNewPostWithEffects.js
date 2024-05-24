import { useEffect, useState } from "react";

// RTK QUERY
import {
  useCreateNewPostMutation,
  useGetAllPostsQuery,
} from "../features/PostApiSlice/PostApiSlice";

// REACT-REDUX
import { useDispatch } from "react-redux";

// refetch State

// Redux actions
import { revealLoading } from "../features/showPagesSlice/revealSlice";
import { triggerRefetch } from "../features/refetchSlice/refetchSlice";
import { selectTodo } from "../features/todosSlice/todosSlice";

const useCreateNewPostWithEffects = () => {
  const [newPostId, setNewPostId] = useState(null);
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
      setNewPostId(newPost._id);
      dispatch(triggerRefetch());
    }
  }, [isCreateNewPostSuccess]);

  // useEffect(() => {
  //   console.log("HERE");
  //   if (isRefetchSuccess) {
  //     console.log(newPostId);
  //     dispatch(selectTodo(newPostId));
  //   }
  // }, [isRefetchSuccess]);

  return {
    createNewPost,
    newPost,
    createNewPostError,
    isCreateNewPostLoading,
    isCreateNewPostSuccess,
    isCreateNewPostError,
  };
};

export default useCreateNewPostWithEffects;
