export interface IProps {
  post: propsPost;
}

type propsPost = {
  _id: string;
  category: string;
  img: string;
  title: string;
  slug: slugType;
};

type slugType = {
  current: string;
};
