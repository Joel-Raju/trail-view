import { createSelector } from 'reselect';
import _ from 'lodash';

const activeTrail = state => state.activeTrail;

const getActiveTrailForRender = createSelector(activeTrail, (trail) => {
  if (_.isEmpty(trail)) {
    return null;
  }

  let { data } = trail;
  let info = (({ name, counts }) => ({ name, counts }))(data.info);
  let author = (({ name, image}) => ({ name, image }))(data.author);

  info.counts.tryouts = data.posts.reduce((sum, post) => sum + post.counts.tryouts, 0);
  
  let posts = _.map(data.posts, (post) => ({
    id: post.id,
    checkInLocation: post.checkInLocation,
    imageUrl: post.imageList.medium,
    about: post.about,
  }));

  return {
    info,
    author,
    posts,
  };

});


export {
  getActiveTrailForRender,
};