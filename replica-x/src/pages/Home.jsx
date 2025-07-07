import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import TweetComposer from "../components/TweetComposer";
import Tweet from "../components/Tweet";

const Home = () => {
  const { user } = useAuth();
  const [tweets, setTweets] = useState([
    {
      id: 1,
      username: "ejemplo_usuario",
      content: "¡Bienvenido a nuestra réplica de X! 🎉",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      likes: 5,
      retweets: 2
    },
    {
      id: 2,
      username: "demo_user",
      content: "Esta es una demostración de cómo funciona la plataforma. ¡Puedes crear tus propios tweets!",
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      likes: 12,
      retweets: 3
    }
  ]);

  const handleNewTweet = (content) => {
    const newTweet = {
      id: Date.now(),
      username: user.username,
      content,
      timestamp: new Date().toISOString(),
      likes: 0,
      retweets: 0
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, likes: tweet.likes + 1 }
        : tweet
    ));
  };

  const handleRetweet = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, retweets: tweet.retweets + 1 }
        : tweet
    ));
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="page-title">Inicio</h1>
      </div>
      
      <TweetComposer onTweet={handleNewTweet} />
      
      <div className="tweets-container">
        {tweets.map(tweet => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            onLike={handleLike}
            onRetweet={handleRetweet}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;