let postId = 1;

const posts = [
  {
    id: 1,
    title: 'title',
    body: 'body'
  }
];

exports.write = (ctx) => {
  const {
    title,
    body
  } = ctx.request.body;

  postId += 1;

  const post = {id: postId, title, body};
  posts.push(post);
  ctx.body = post;
}

