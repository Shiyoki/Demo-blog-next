import Layout from "../../components/Layout";
import Link from "next/link";

export default function index({ data }) {
  return (
    <Layout title="Blog - next.js" description="Blog description">
      <div>
        <h1>Blog</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h3>
              <Link href={`/blog/${post.id}`}>
                <a>
                  {post.id} - {post.title}
                </a>
              </Link>
            </h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
