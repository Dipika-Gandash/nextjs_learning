export default async function Users() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'force-cache' });
  const postsData = await posts.json();
  console.log("SERVER RUNNING");
  return (
    <div className="mt-34">
      {postsData.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
