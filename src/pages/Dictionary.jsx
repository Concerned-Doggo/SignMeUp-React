import { useEffect, useState } from "react";

const Dictionary = () => {
  const URL = import.meta.env.VITE_URL;
  const YOUTUBE_EMBED_URL = import.meta.env.VITE_YOUTUBE_EMBED_URL;

  const [data, setData] = useState(null);
    const [youtubeIframe, setYoutubeIframe] = useState(null);


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (id) => {
    const embedSrc = YOUTUBE_EMBED_URL + id;
    setYoutubeIframe (
      <iframe
        style={{width: '640px', height: '360px'}}
        class="self-center"
        src={embedSrc}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    )
  };


  return (
    <>
      <div id="youtubeIframe" className="flex border-black-2 justify-center">{youtubeIframe}</div>
      <div
        className="w-full flex flex-col md:flex-row flex-wrap justify-center mb-10"
        id="result"
      >
        {data
          ? data.items.map((item) => (
              <div
                onClick={() => handleClick(item.snippet.resourceId.videoId)}
                key={item.snippet.resourceId.videoId}
                className=""
              >
                <div className="bg-sky-300 p-5 m-5 rounded-3xl shadow-lg">
                  <img className="" src={item.snippet.thumbnails.medium.url} />
                  <h5 className="text-white">
                    {item.snippet.title.substring(0, 39)}...
                  </h5>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Dictionary;
