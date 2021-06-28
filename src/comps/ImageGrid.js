import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const sliceArr = (arr, moduleNum, remainder) => {
  return arr.filter((_, index) => {
      return index % moduleNum === remainder;
    })
};


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  // media query lists
  const [isOneCol, setIsOneCol] = useState(window.matchMedia('(max-width: 600px)').matches);
  const [isTwoCol, setIsTwoCol] = useState(window.matchMedia('(max-width: 800px)').matches);
  useEffect(() => {
    const handler = () => {
      setIsOneCol(window.matchMedia('(max-width: 600px)').matches);
      setIsTwoCol(window.matchMedia('(max-width: 800px)').matches);
    }
    window.addEventListener('resize', handler);
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handler);
  }, []);

  const getColHtml = (colNum, index) => {
    return (
      <div className="column">
        {docs && sliceArr(docs, colNum, index).map(doc => (
          <motion.div className="img-wrap" key={doc.id} 
            layout
            whileHover={{ opacity: 1 }}s
            onClick={() => setSelectedImg(doc.url)}>
            <motion.img src={doc.url} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
      </div>
    )
  };

  if(isOneCol && isTwoCol) {
    return (
      <div className="row">
        {getColHtml(1,0)}
      </div>
    ) 
  } else if(isTwoCol) {
    return (
      <div className="row">
        {getColHtml(2,0)}
        {getColHtml(2,1)}
      </div>
    ) 
  } else {
    return (
      <div className="row">
        {getColHtml(4,0)}
        {getColHtml(4,1)}
        {getColHtml(4,2)}
        {getColHtml(4,3)}
      </div>
    ) 
  }
}

export default ImageGrid;