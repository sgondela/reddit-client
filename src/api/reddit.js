export const apiRoot = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${apiRoot}${subreddit}.json`);
  const json = await response.json();
  const posts = json.data.children.map((post) => post.data);
  return posts;
};

export const getSubreddits = async () => {
  const response = await fetch(`${apiRoot}/subreddits.json`);
  const json = await response.json();
  const subreddits = json.data.children.map((subreddit) => subreddit.data);
  return subreddits;
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${apiRoot}${permalink}.json`);
  const json = await response.json();
  const comments = json[1].data.children.map((subreddit) => subreddit.data);
  return comments;
};