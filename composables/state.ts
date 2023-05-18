interface User {
  name: string;
  avatarUrl: string;
  id: string;
}

export const user = () => useState<User>("user");
