function Tweet({ username, name, date, message }) {
  return <div className="tweetComponent">
    Username: {username}
    Name: {name}
    Date: {date}
    Message: {message}
  </div>;
}