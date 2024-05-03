const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      excerpt: 'Dive into the power of React Hooks to simplify your components and manage state effectively...',
      url: '/post/react-hooks'
    },
    {
      id: 2,
      title: 'Why JavaScript is Still King',
      excerpt: 'Exploring the reasons behind JavaScript\'s enduring popularity and its pivotal role in modern web development...',
      url: '/post/javascript-king'
    },
    {
      id: 3,
      title: 'Optimizing Node.js Performance',
      excerpt: 'Tips and tricks for enhancing the performance of your Node.js applications...',
      url: '/post/optimize-node'
    }
    // Add more posts & Create Database & method for me to post
  ]
  
  const Blog = () => {
    return (
      <div className="blog-container">
        {blogPosts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button onClick={() => window.location.href = post.url}>Read More</button>
          </div>
        ))}
      </div>
    )
  }
  
  export default Blog