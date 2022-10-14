import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

function HomePage() {
  return (
    // Se pasa el prop home porque es la homepage y tiene un parametro diferente en el layout
    <Layout title="Home - next.js" description="Home description" home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

export default HomePage;
