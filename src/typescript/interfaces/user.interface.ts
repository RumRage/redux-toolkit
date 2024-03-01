export interface UserDataProps {
  id: string;
  name: string;
  username: string | null;
  email: string | null;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string | null;
  website: string | null;
}
