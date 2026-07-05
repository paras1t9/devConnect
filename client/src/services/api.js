const BASE_URL = "http://localhost:3000/api";

export async function registerUser(userData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function loginUser(userData) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function getProfile(token) {
  const response = await fetch(`${BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}

export async function getPosts(token) {
  const response = await fetch(`${BASE_URL}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}

export async function createPost(content, token) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content,
    }),
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function toggleLike(postId, token) {
  const response = await fetch(`${BASE_URL}/posts/${postId}/like`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function deletePost(postId, token) {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function getComments(postId, token) {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}/comments`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function createComment(postId, content, token) {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content,
      }),
    }
  );

  const data = await response.json();

  return {
    response,
    data,
  };
}
export async function deleteComment(commentId, token) {
  const response = await fetch(
    `${BASE_URL}/comments/${commentId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return {
    response,
    data,
  };
}