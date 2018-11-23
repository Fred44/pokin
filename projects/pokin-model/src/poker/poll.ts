export interface PollOptions {
  question: string;
}

export interface Poll {
  question: string;
  votesAreShown: boolean;
  votes: { [key: string]: PlayerVote };
}

export interface PlayerVote {
  userId: string;
  user: Player;
  at: Date;
  card: string;
}

export interface Player {
  name: string;
  picture?: string;
}

export interface MyVote {
  card: string;
  updated: Date;
}
