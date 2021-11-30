import Truncate from 'react-truncate';

const Story = ({ story }) => (
  <li className='story-wrapper'>
    <img src={story.thumbnail} alt={story.headline} />
    <div className='text-wrapper'>
      <h2>
        <Truncate lines={2} ellipsis={<span className='ellipsis'>...</span>}>
          {story.headline}
        </Truncate>
      </h2>
      <a href={story.url} title={story.headline} className='news'>News</a>
    </div>
  </li >
)
export default Story