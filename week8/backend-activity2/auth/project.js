// auth/project.js

// Sample authentication and authorization functions
function canViewProject(user, project) {
  // Example: Check if the user has permission to view the project
  // You can implement your logic here
  if (user.role === "admin" || user.id === project.ownerId) {
    return true;
  }
  return false;
}

function canDeleteProject(user, project) {
  // Example: Check if the user has permission to delete the project
  // You can implement your logic here
  if (user.role === "admin" || user.id === project.ownerId) {
    return true;
  }
  return false;
}

function scopedProjects(user, projects) {
  // Example: Return only projects that the user has access to
  // You can implement your logic here
  if (user.role === "admin") {
    return projects;
  }
  return projects.filter((project) => project.ownerId === user.id);
}

module.exports = {
  canViewProject,
  canDeleteProject,
  scopedProjects,
};
