import api from "../config/api";

export const fetchBlogsByTopic = (topic) => {
  return api.get(`/api/blog/fetchblog/${topic}`);
};

export const likeBlog = (id) => {
  return api.put(`/api/blog/likes/${id}`);
};

export const commentBlog = (id, text) => {
  return api.post(`/api/blog/comment/${id}`, {
    text,
  });
};

export const deleteBlog = (id) => {
  return api.delete(`/api/blog/deleteblog/${id}`);
};

// export const updateBlog = (id, data) => {
//   return api.put(`/api/blog/updateblog/${id}`, data);
// };


export const updateBlog = (id, data) => {
  return api.put(`/api/blog/updateblog/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
