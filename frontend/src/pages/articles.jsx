import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const Articles = () => {
    return (
        <>
            <h3>
                Recent Posts from{" "}
                <a
                    href="https://dev.to/itsnitinr"
                    target="_blank"
                    rel="noopener"
                    className={styles.underline}
                >
                    dev.to
                </a>
            </h3>
            <div className={styles.container}>
                info
                {/* {articles?.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))} */}
            </div>
        </>
    );
};

export default Articles;
