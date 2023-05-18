import React from "react";

const Details = () => {
  return (
    <form class="max-w-md mx-auto">
      <div class="flex flex-col max-w-md mx-auto">
        <input
          type="text"
          class=" mr-2 p-2 border border-gray-300 rounded"
          placeholder="Input 1"
        />
        <input
          type="text"
          class=" mr-2 p-2 border border-gray-300 rounded"
          placeholder="Input 2"
        />
        <input
          type="text"
          class=" flex-1 mr-2 p-2 border border-gray-300 rounded"
          placeholder="Input 3"
        />
        <input
          type="text"
          class=" mr-2 p-2 border border-gray-300 rounded"
          placeholder="Input 4"
        />
        <input
          type="text"
          class="mr-2  p-2 border border-gray-300 rounded"
          placeholder="Input 5"
        />
      </div>
    </form>
  );
};

export default Details;
