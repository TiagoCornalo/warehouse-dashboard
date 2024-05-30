export const canAccessDashboards = (dasboardPermissions: any, userPermissions: any) => {
  if(!dasboardPermissions) return true;

  for (const key in dasboardPermissions) {
    if (Object.prototype.hasOwnProperty.call(dasboardPermissions, key)) {
      if(dasboardPermissions[key] !== userPermissions[key]) return false;
    }
  }

  return true;
};