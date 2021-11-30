import Story from "./Story"

const Stories = ({ stories }) => stories.map(story => <Story story={story} />)

export default Stories