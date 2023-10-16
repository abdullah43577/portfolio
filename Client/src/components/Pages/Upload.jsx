import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { base64EncodedImage, SERVER } from '../helper/helper';

export default function Upload() {
  const [value, setValue] = useState('');
  const [inputState, setInputState] = useState({
    title: '',
    thumbnail: '',
  });

  // const [renderHtml, setRenderHtml] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setInputState((prevValue) => ({ ...prevValue, [name]: value }));
  };

  useEffect(() => console.log('inputState', inputState), [inputState]);

  const handleFileSelect = function (e) {
    const file = e.target.files[0];
    console.log('file', file);

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
        } catch (err) {
          console.log(err);
        }
      };

      getThumbnailURL();
    }
  }, [inputState.thumbnail]);

  const renderHtmlInfo = function () {
    // Set the HTML content using quill-delta-to-html library
    const converter = new QuillDeltaToHtmlConverter(value, { classPrefix: false });
    console.log('converter', converter);

    const html = converter.convert();
    console.log('html', html);
    setHtmlContent(html);
  };

  useEffect(() => console.log('html', htmlContent), [htmlContent]);

  const publishArticle = function () {
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

      {htmlContent ? <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> : ''}
    </section>
  );
}

// Todo
// * create folder for upload in cloudinary ✅
// * ask chatGPT why image conversion to binary isn't working ✅
// * implement conversion from quill-html to DOM readable content
// * ask chatGPt how it's possible to implement and sytle code formatted contents in react-quill
// * ask chatGPT how it's possible to implement blocking of the upload route for only me as the owner of the portfolio website

// ? =================================================================================

// Todo 2 (simulation of the blog flow)
// * on successfully converting thumbnail to binary, send a post request to the backend to upload image to cloudinary and retrieve the live url.

// * update corresponding states in the client side to reflect changes of the newly gotten url.

// * after figuring out how to insert custom code blocks in react-quill, send filled data to the backend using a post request.

// * on the homepage where we have 3 blogs to be shown, on load of the page, make a get request to the backend to give you just 3 blogs e.g.

// * const blog = await Blog.find({}) => returns all blogs
// * const newArr = blog.slice(-1); return newArr
// * loop through in the client side and render the blogs, truncate the body descritipon text shown on the homepage where on click on any of the blog takes them to a page with their corresponding ID.

// * ideally when looping through to render the blogs on the homepage, you'd have made the ID attribute equal to the specific blog ID

// * the page with the corresponding ID, showcases the full detail of that blog
// ? there'd also be a page that showcases the whole blogs, you'll be working with pagination to avoid cluttering and several blogs on the page

// ? make sure this route isn't accessible by a 3rd party(ask chatGPT of the best way to implement this, I'm personally thinking JSON web token, but still ask chatGPT for the right answer to this)
