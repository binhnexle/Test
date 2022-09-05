import React, { useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { DEFAULT_IMAGE, URL_GALLERY, URL_GALLERY_WITH_PAGE } from '../constants';

import CardImage from '../components/CardImage';

function TestPage() {
  const [datas, setDatas] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const parentRef = useRef();

  const loadMore = currentPage => {
    let path = `${URL_GALLERY_WITH_PAGE}/${currentPage}`;
    if (currentPage === 0) {
      path = URL_GALLERY;
    }

    return fetch(`${path}`)
      .then(res => res.json())
      .then(res => {
        if (res?.nodes?.length) {
          setDatas(items => [...items, ...res.nodes]);
        } else setHasMore(false);
      });
  };

  return (
    <Container align="center" ref={parentRef}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Grid container justifyContent="center" />}
        useWindow={false}
        getScrollParent={() => parentRef.current}
      >
        {datas.map((item, index) => {
          const { title, field_photo_image_section = DEFAULT_IMAGE, last_update, path } = item.node;
          return (
            <CardImage
              key={index}
              title={title}
              imgLink={field_photo_image_section}
              last_update={last_update}
              path={path}
            />
          );
        })}
      </InfiniteScroll>
    </Container>
  );
}

export default TestPage;
