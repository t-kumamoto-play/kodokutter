function Timeline(props){
    // propsからTweetのリストを受け取る
    const tweetList = props.tweets.map(
        (tw) => (
            <Tweet
                key={tw.id}
                icon={tw.icon}
                displayName={tw.displayName}
                accountName={tw.accountName}
                content={tw.content}
            />
        )
    );
    // 表示する
    return <div className="titmeline">{tweetList}</div>;
}