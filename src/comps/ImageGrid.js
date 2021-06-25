import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const sliceArr = (arr, moduleNum, remainder) => {
  return arr.filter((_, index) => {
      return index % moduleNum === remainder;
    })
};

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div class="row">
      <div class="column">
        {docs && sliceArr(docs, 4, 0).map(doc => (
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
      <div class="column">
        {docs && sliceArr(docs, 4, 1).map(doc => (
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
      <div class="column">
        {docs && sliceArr(docs, 4, 2).map(doc => (
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
      <div class="column">
        {docs && sliceArr(docs, 4, 3).map(doc => (
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
    </div>
  )
}

export default ImageGrid;