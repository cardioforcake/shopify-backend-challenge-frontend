import {uploadImage} from '../service-functions/service-functions';



function ImageUpload(props){
  return(
    <>
      <form 
        action={
          props.user ? `http://localhost:8000/image/${props.user.uid}/add-image` 
          : "http://localhost:8000/image/add-image"
        } 
        method="POST" enctype="multipart/form-data"
      >
        Title<input type="text" name="title"/>
        Creator<input type="text" name="creator"/>
        <input type="file" name="image-file"/>
        <input type="submit" value="Upload"/>
      </form>
    </>
  )
};

export default ImageUpload;