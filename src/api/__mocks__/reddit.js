import { posts, subreddits, comments } from './mockData';
import _ from 'lodash';

export function getSubredditPosts(subreddit) {
	return new Promise((resolve) => {
		const _posts = _.filter(posts, post => {
			return `/r/${post.subreddit}/` === subreddit;
		});
		if (_posts) {
			resolve(_posts);
		}
	});
};

export function getSubreddits() {
	return new Promise((resolve) => {
		if (subreddits) {
			resolve(subreddits);
		}
	});
};

export function getPostComments(permalink) {
	return new Promise((resolve) => {
		const _comments = _.filter(comments, comment => {
			return comment.permalink.startsWith(permalink);
		});
		if (_comments) {
			resolve(_comments);
		}
	});
};