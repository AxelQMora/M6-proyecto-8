import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const TweetComposer = ({ onTweet }) => {
  const [content, setContent] = useState("");
  const { user } = useAuth();
  const maxLength = 280;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() && content.length <= maxLength) {
      onTweet(content.trim());
      setContent("");
    }
  };

  const remainingChars = maxLength - content.length;

  return (
    <div className="tweet-composer">
      <div className="composer-header">
        <div className="composer-avatar">
          {user?.username?.charAt(0).toUpperCase()}
        </div>
        <div className="composer-form">
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="¿Qué está pasando?"
              className="composer-textarea"
              rows={3}
              maxLength={maxLength}
            />
            <div className="composer-actions">
              <span className={`char-count ${remainingChars < 20 ? 'warning' : ''} ${remainingChars < 0 ? 'error' : ''}`}>
                {remainingChars}
              </span>
              <button
                type="submit"
                disabled={!content.trim() || content.length > maxLength}
                className="tweet-button"
              >
                Postear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer;