import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ViewPost from '../components/view_post';

function ViewNews() {
  const { id } = useParams();
  return (
    <>
      <ViewPost id={id} />
    </>
  );
}

export default ViewNews;
