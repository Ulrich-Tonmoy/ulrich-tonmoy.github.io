import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const Github = () => {
    const theme = {
        level0: "#161B22",
        level1: "#0e4429",
        level2: "#006d32",
        level3: "#26a641",
        level4: "#39d353",
    };

    return (
        <>
            <div className={styles.user}>
                <div>
                    <img
                        src="/favicon.ico"
                        className={styles.avatar}
                        // alt={user.login}
                        width={50}
                        height={50}
                    />
                    {/* <h3 className={styles.username}>{user.login}</h3> */}
                </div>
                <div>{/* <h3>{user.public_repos} repos</h3> */}</div>
                <div>{/* <h3>{user.followers} followers</h3> */}</div>
            </div>
            <div className={styles.container}>
                {/* {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))} */}
            </div>
        </>
    );
};

export default Github;
