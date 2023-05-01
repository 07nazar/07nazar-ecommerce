export type SessionUserId = 'SessionUserId';

export type Session = {
  accessToken: string;
  userId: SessionUserId;
  isAuth: boolean;
};
