import React, { useCallback, useState } from 'react';
import { MainImage, Previewer, PreviewImage, PreviewList } from './style';

type ImageData = {
  id: number;
  src: string;
  previewSrc: string;
}

type ImagePreviewProps = {
  images: ImageData[]
}

const ImagePreview : React.FC<ImagePreviewProps> = ({images} : ImagePreviewProps) => {
  const [preview, setPreview] = useState<number>(0);

  const changeImage = useCallback((e: number) => {
    setPreview(e);
  },[])

  return (
  <Previewer>
    <MainImage style={{backgroundImage: `url(${images[preview].src})`}}/>
    <PreviewList>
      {images.map((image) => (
       <PreviewImage itemID={image.id} 
        key={image.id} 
        src={image.previewSrc} 
        alt={`Preview Image ${image.id}`}
        active={preview === image.id}
        onClick={changeImage} 
        />
      ))}
    </PreviewList>
  </Previewer>
  )
}

export default ImagePreview;