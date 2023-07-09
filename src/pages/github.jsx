import styles from "../styles/GithubPage.module.css";
import { useEffect, useState } from "react";

const Github = () => {
  const [repos, setRepos] = useState();
  const [followers, setFollowers] = useState();

  const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/Ulrich-Tonmoy/repos");
    return await response.json();
  };
  const getFollowers = async () => {
    const response = await fetch("https://api.github.com/users/Ulrich-Tonmoy/followers");
    return await response.json();
  };

  useEffect(() => {
    (async () => {
      setRepos(await getRepos());
      setFollowers(await getFollowers());
    })();
  }, []);

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/65508234"
            className={styles.avatar}
            alt="git profile pic"
            width={50}
            height={50}
          />
          <h3 className={styles.username}>Ulrich-Tonmoy</h3>
        </div>
        <div>
          <h3>{repos?.length} repos</h3>
        </div>
        <div>
          <h3>{followers?.length} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        <img
          src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical"
          title="Dev Quote"
        />
      </div>
      <div className={styles.container}>
        <h1 align="center"> 👀 Visitors 👀</h1>
        <p>Counting of visitors started from January 1, 2023.</p>
        <a href="https://info.flagcounter.com/dtQ8">
          <img
            src="https://s01.flagcounter.com/count2/dtQ8/bg_000000/txt_FFFFFF/border_08FF94/columns_8/maxflags_20/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
            alt="Flag Counter"
            border="0"
            title="Flag Counter"
          />
        </a>
        <img
          src="https://count.getloli.com/get/@ulrich-tonmoy.github.readme"
          alt="view counter"
          title="view counter"
        />
      </div>
      <div className={styles.container}>
        <h1 align="center"> 🏆 Trophies 🏆</h1>
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img
            src="https://github-profile-trophy.vercel.app/?username=Ulrich-Tonmoy&theme=dracula&column=8&no-frame=true&no-bg=true"
            title="Trophies"
          />
        </a>
      </div>
      <div className={styles.container}>
        <h1 align="center"> 📊 Stats 📊</h1>
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Ulrich-Tonmoy&show_icons=true&count_private=true&theme=blue-green"
            alt="Ulrich-Tonmoy's GitHub stats"
            title="stats"
          />
        </a>
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ulrich-Tonmoy&theme=blue-green&layout=compact&langs_count=30"
            alt="Top Langs"
            title="Top Langs"
          />
        </a>
      </div>
      <div className={styles.container}>
        <h1 align="center"> 🔥 Contributions 🔥</h1>
        <a href="https://git.io/streak-stats">
          <img
            src="https://streak-stats.demolab.com?user=Ulrich-Tonmoy&theme=react&date_format=j%20M%5B%20Y%5D&background=0D1117&fire=DDB500"
            alt="Contributions"
            title="Contributions"
          />
        </a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Ulrich-Tonmoy&theme=react-dark&hide_border=true"
            title="activity graph"
          />
        </a>
      </div>
    </>
  );
};

export default Github;
