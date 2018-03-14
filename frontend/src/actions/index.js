export const CURRENT_CATEGORY = 'CURRENT_CATEGORY';
export const CURRENT_POST = 'CURRENT_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function currentCategory (category) {
  return {
    type: CURRENT_CATEGORY,
    screens: {
      category
    }
  };
}

export function currentPost (post) {
  return {
    type: CURRENT_POST,
    screens: {
      post
    }
  };
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post
  };
}

export function removePost (post) {
  return {
    type: REMOVE_POST,
    post
  };
}

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function upVotePost (post) {
  return {
    type: UPVOTE_POST,
    post
  };
}

export function downVotePost (post) {
  return {
    type: DOWNVOTE_POST,
    post
  };
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function removeComment (comment) {
  return {
    type: REMOVE_COMMENT,
    comment
  };
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

export function upVoteComment (comment) {
  return {
    type: UPVOTE_COMMENT,
    comment
  };
}

export function downVoteComment (comment) {
  return {
    type: DOWNVOTE_COMMENT,
    comment
  };
}
