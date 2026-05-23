import api from "../config/api";

export const register = ()=>{
 return api.post('/api/auth/register')
}

export const login = ()=>{
 return api.post('/api/auth/login')
}


export const logout = ()=>{
 return api.post('/api/auth/logout')
}

// export const commentBlog = (id, text) => {
//   return api.post(`/api/blog/comment/${id}`, {
//     text,
//   });
// };

// export const deleteBlog = (id) => {
//   return api.delete(`/api/blog/deleteblog/${id}`);
// };

// export const updateBlog = (id, data) => {
//   return api.put(`/api/blog/updateblog/${id}`, data);
// };


export const currentUser = () => {
  return api.get("/api/auth/currentuser");
};