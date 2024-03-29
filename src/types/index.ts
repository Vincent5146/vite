// userLogin
export interface photo {
  id: number;
  avg_color: string;
  height: number;
  liked: false;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    url: string;
    width: number;
    medium: string;
    large: string;
    large2x: string;
    portrait: string;
    small: string;
    tiny: string;
  };
}
export interface video {
  id: number;
  url: string;
  image: string;
  full_res: null;
  tags: string[];
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    fps: number;
    link: string;
  };
}

export interface RootState {
  photos?: photo[];
  videos?: video[];
}
