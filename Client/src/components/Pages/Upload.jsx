import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { base64EncodedImage, SERVER, alert } from '../helper/helper';
import parse from 'html-react-parser';

export default function Upload() {
  const [value, setValue] = useState('');
  const [inputState, setInputState] = useState({
    title: '',
    thumbnail: '',
  });

  const [htmlContent, setHtmlContent] = useState('');

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setInputState((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleFileSelect = function (e) {
    const file = e.target.files[0];

    setInputState((prevValue) => ({ ...prevValue, thumbnail: file }));
  };

  useEffect(() => {
    // execute conversion to binary here
    if (inputState.thumbnail) {
      const getThumbnailURL = async function () {
        const binaryValue = await base64EncodedImage(inputState.thumbnail);

        // upload to cloudinary
        try {
          const res = await fetch(`${SERVER}/upload_image`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ thumbnail: binaryValue }),
          });

          const data = await res.json();
          console.log('data', data);
          if (!res.ok) throw new Error('Something went wrong');

          setInputState((prevValue) => ({ ...prevValue, thumbnail: data.url }));
          alert('success', 'Thumbnail successfully uploaded!');
        } catch (err) {
          console.log(err);
          alert('error', 'Error uploading Thumbnail!');
        }
      };

      getThumbnailURL();
    }
  }, [inputState.thumbnail]);

  const renderHtmlInfo = function () {
    setHtmlContent(parse(value));
  };

  const publishArticle = function () {
    const isInvalid = Object.keys(FormData).includes('');
    if (isInvalid) return alert('error', 'Please make sure you filled all the required fields correctly');

    try {
      console.log('send blog to the backend for upload');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="upload">
      <h2 className="text-hdTxt text-3xl font-medium my-3">Add new Post</h2>

      <input type="text" name="title" value={inputState.title} className="w-full bg-transparent border-gray-300 border px-3 py-2 my-3 outline-none text-2xl capitalize" placeholder="Add title" onChange={handleInputChange} />

      <div className="thumbnail flex items-center gap-3 mb-3">
        <label htmlFor="file">
          Add thumbnail
          <input name="thumbnail" type="file" accept="image/*" onChange={handleFileSelect} />
        </label>
        <span className="valueMsg">{inputState.thumbnail && 'img.png'}</span>
      </div>

      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div className="btns mt-3 flex items-center gap-3">
        <button className="px-3 py-2 bg-cta rounded-md" onClick={renderHtmlInfo}>
          Text
        </button>

        <button className="px-3 py-2 bg-cta rounded-md" onClick={publishArticle}>
          Publish
        </button>
      </div>

      {htmlContent ? <div>{htmlContent}</div> : null}
    </section>
  );
}

// Todo
// * create folder for upload in cloudinary ✅
// * ask chatGPT why image conversion to binary isn't working ✅
// * implement conversion from quill-html to DOM readable content ✅
// * ask chatGPt how it's possible to implement and sytle code formatted contents in react-quill
// * ask chatGPT how it's possible to implement blocking of the upload route for only me as the owner of the portfolio website

// ? =================================================================================
