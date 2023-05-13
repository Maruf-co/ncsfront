const HeadMeta = ({ title = 'Pirozhkoff', description = 'Pirozhkoff banking app' }) => {
  document.head.querySelector('[name=description]').content = description;
  document.title = title;

  return null;
};

export default HeadMeta;
