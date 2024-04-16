import Image from 'next/image';
import React from 'react';


const ImageModal = ({ showModal, setShowModal, imageUrl } : 
    { 
    showModal: boolean;
    setShowModal: (show: boolean) => void;
        imageUrl: string;
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
        <Image src={imageUrl} alt="Modal" />
        <button
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;