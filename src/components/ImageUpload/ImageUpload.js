
function ImageUpload(props){
  return(
    <div>
      <form 
        action={
          props.user ? `https://image-repository-challenge.herokuapp.com/image/${props.user.uid}/add-image` 
          : "https://image-repository-challenge.herokuapp.com/image/add-image"
        } 
        method="POST" enctype="multipart/form-data"
      >
        Title<input type="text" name="title"/>
        Creator<input type="text" name="creator"/>
        <input type="file" name="image-file"/>
        <input type="submit" value="Upload"/>
      </form>
    </div>
  )
};

export default ImageUpload;