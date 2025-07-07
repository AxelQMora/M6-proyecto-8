const Tweet = ({ tweet, onLike, onRetweet }) => {
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const tweetTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now - tweetTime) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds}s`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}min`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}h`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)}d`;
    }
  };

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        {tweet.username.charAt(0).toUpperCase()}
      </div>
      
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-username">@{tweet.username}</span>
          <span className="tweet-time">·</span>
          <span className="tweet-time">{formatTimeAgo(tweet.timestamp)}</span>
        </div>
        
        <div className="tweet-text">
          {tweet.content}
        </div>
        
        <div className="tweet-actions">
          <button 
            className="action-btn comment"
            onClick={() => {/* Implementar comentarios */}}
          >
            <span className="action-icon">💬</span>
            <span className="action-count">0</span>
          </button>
          
          <button 
            className="action-btn retweet"
            onClick={() => onRetweet(tweet.id)}
          >
            <span className="action-icon">🔄</span>
            <span className="action-count">{tweet.retweets}</span>
          </button>
          
          <button 
            className="action-btn like"
            onClick={() => onLike(tweet.id)}
          >
            <span className="action-icon">❤️</span>
            <span className="action-count">{tweet.likes}</span>
          </button>
          
          <button 
            className="action-btn share"
            onClick={() => {/* Implementar compartir */}}
          >
            <span className="action-icon">📤</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;