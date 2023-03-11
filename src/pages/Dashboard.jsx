import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import Dashboardlayout from '../components/Dashboardlayout';
import ImageCard from '../components/ImageCard';
import Loading from '../components/loader/Loading';

import {
  pageCounter,
  updateProfilesList,
  uploadProfiles,
} from '../redux/DashboardSlice';
import './pages.css';
const Dashboard = () => {
  const [isFetching, setIsFetching] = useState(false);
  const listener = useRef(true);
  const [delay, setDelay] = useState(false);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );

  const dispatch = useDispatch();
  const increase = () => {
    dispatch(pageCounter());
    setIsFetching(false);
  };
  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      // dispatch(uploadProfiles(pageNumber));
    }
    setDelay(true);
    const timer = setTimeout(() => {
      setDelay(false);
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const divRef = useRef(null);
  const handleScroll = () => {
    const container = divRef.current;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;
    const scrollHeight = container.scrollHeight;
    const isAtBottom = scrollTop + clientHeight + 500 >= scrollHeight - 30;
    if (isAtBottom && !isLoading) {
      // increase();
      // dispatch(updateProfilesList(pageNumber));
    }
  };

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <Dashboardlayout>
      {delay ? (
        <SyncLoader color="#fff" loading={true} size={10} />
      ) : (
        <div
          ref={divRef}
          onScroll={handleScroll}
          className="layout mt-10 mb-24 overflow-auto"
        >
          {/* {profiles?.map(({ URL, likes, id }, idx) => {
            return (
              <div key={idx} className="flex justify-center max-w-[786px]  ">
                <ImageCard src={URL} likes={likes} id={id} />
              </div>
            );
          })} */}
          {images?.map(({ src, likes, id }, idx) => {
            return (
              <div key={idx} className="flex justify-center max-w-[786px]  ">
                <ImageCard src={src} />
              </div>
            );
          })}
          <div className="flex justify-center">
            {isFetching ? <Loading /> : null}
          </div>
        </div>
      )}
    </Dashboardlayout>
  );
};

export default Dashboard;
