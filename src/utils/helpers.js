export const randomString = () => Math.round(Math.random() * 1e8).toString(36);

export const uniqueId = () =>
  `${new Date()
    .getTime()
    .toString(36)}-${randomString()}-${randomString()}`.toUpperCase();
